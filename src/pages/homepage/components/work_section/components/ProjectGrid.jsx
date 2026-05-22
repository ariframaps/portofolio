import { ProjectCard } from "./ProjectCard";
import { ConfidentialCard } from "./ConfidentialCard";

const SkeletonCard = () => (
	<div className="animate-pulse rounded-xl overflow-hidden border border-[#f0f0f0] dark:border-[#111]">
		<div className="bg-[#f5f5f5] dark:bg-[#0f0f0f] h-48 w-full" />
		<div className="p-5 space-y-3">
			<div className="h-4 bg-[#eee] dark:bg-[#1a1a1a] rounded w-2/3" />
			<div className="h-3 bg-[#eee] dark:bg-[#1a1a1a] rounded w-full" />
			<div className="h-3 bg-[#eee] dark:bg-[#1a1a1a] rounded w-4/5" />
			<div className="flex gap-2 pt-1">
				{[1, 2, 3].map((i) => (
					<div
						key={i}
						className="h-5 w-14 bg-[#eee] dark:bg-[#1a1a1a] rounded-full"
					/>
				))}
			</div>
		</div>
	</div>
);

const EmptyState = ({ category }) => {
	const messages = {
		personal: {
			title: "No personal projects yet",
			sub: "Check back soon — always building something.",
		},
		client_public: {
			title: "No public client work here yet",
			sub: "More coming as projects go live.",
		},
		client_confidential: {
			title: "No confidential projects listed",
			sub: "Some engagements aren't ready to share yet.",
		},
	};
	const m = messages[category] || messages.personal;

	return (
		<div className="py-16 text-center">
			<p className="text-2xl mb-2">🗂️</p>
			<p className="font-poppins font-medium text-black dark:text-[#ccc] mb-1">
				{m.title}
			</p>
			<p className="text-sm text-[#888] dark:text-[#555] font-lato">{m.sub}</p>
		</div>
	);
};

export const ProjectGrid = ({ projects, loading, category }) => {
	if (loading) {
		return (
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
				{[1, 2, 3].map((i) => (
					<SkeletonCard key={i} />
				))}
			</div>
		);
	}

	if (!projects.length) {
		return <EmptyState category={category} />;
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
			{projects.map((project, i) =>
				project.category === "client_confidential" ? (
					<ConfidentialCard key={project.id || i} project={project} />
				) : (
					<ProjectCard key={project.id || i} project={project} />
				),
			)}
		</div>
	);
};
