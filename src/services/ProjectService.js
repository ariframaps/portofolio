import confidentialClientProject from "../data/confidential.project";
import publicClientProject from "../data/public.project";

const GITHUB_USERNAME = "ariframaps";

/**
 * Fetches a repo's public/metadata.json.
 * Returns null if the file doesn't exist or can't be parsed.
 */
const fetchMetadata = async (repoName) => {
	try {
		const url = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/master/public/metadata.json`;
		const res = await fetch(url);
		if (!res.ok) return null;
		return await res.json();
	} catch {
		return null;
	}
};

/**
 * Checks whether public/thumbnail.webp exists in the repo.
 */
const hasThumbnailWebp = async (repoName) => {
	try {
		const url = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/master/public/thumbnail.webp`;
		const res = await fetch(url, { method: "HEAD" });
		return res.ok;
	} catch {
		return false;
	}
};

/**
 * Fetches all repos that have:
 *  - a homepage URL
 *  - public/thumbnail.webp
 *  - public/metadata.json
 *
 * metadata.json shape (all optional except title):
 * {
 *   title: string,
 *   category: "personal" | "client_public" | "client_confidential",
 *   description: string,       // overrides repo description if present
 *   shortDesc: string,         // one-liner shown on card
 *   tags: string[],            // overrides repo topics if present
 *   confidentialNote: string,  // shown instead of live link for confidential
 *   year: string | number,
 *   role: string
 * }
 */
export const GetProjects = async () => {
	try {
		const response = await fetch(
			`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
		);
		const repos = await response.json();

		// Only repos that have a homepage
		const withHomepage = repos.filter(
			(r) => r.homepage && r.homepage.trim() !== "",
		);

		// Check thumbnail + metadata in parallel per repo
		const settled = await Promise.all(
			withHomepage.map(async (repo) => {
				const [hasThumb, metadata] = await Promise.all([
					hasThumbnailWebp(repo.name),
					fetchMetadata(repo.name),
				]);

				if (!hasThumb || !metadata) return null;

				return {
					id: repo.id,
					name: metadata.title || repo.name,
					repoName: repo.name,
					description: metadata.description || repo.description || "",
					shortDesc: metadata.shortDesc || "",
					tags: metadata.tags || repo.topics || [],
					category: metadata.category || "personal",
					web_link: repo.homepage,
					github_link:
						metadata.category === "client_confidential" ? null : repo.html_url,
					thumbnail_url: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/master/public/thumbnail.webp`,
					confidentialNote:
						metadata.confidentialNote ||
						"This project is under NDA. Details available upon request.",
					year: metadata.year || null,
					role: metadata.role || null,
					isPublicSource: metadata.category !== "client_confidential",
					// Rich modal data — comes from metadata.json under the "details" key
					details: metadata.details || null,
				};
			}),
		);

		const githubRepoProject = settled.filter(Boolean);

		return [
			...githubRepoProject,
			...publicClientProject,
			...confidentialClientProject,
		];
	} catch (err) {
		console.error("GetProjects error:", err);
		return [];
	}
};
