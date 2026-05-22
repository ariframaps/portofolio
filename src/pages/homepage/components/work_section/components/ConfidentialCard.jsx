import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

const TagChip = ({ tag }) => (
	<span className="inline-block text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-[#f5f3ff] dark:bg-[#0e0b14] text-[#8b7cb3] dark:text-[#4a3f63] border border-[#e8e3f7] dark:border-[#1a1525]">
		{tag}
	</span>
);

export const ConfidentialCard = ({ project }) => {
	const [imgError, setImgError] = useState(false);
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<article className="group flex flex-col rounded-xl overflow-hidden border border-[#ebebeb] dark:border-[#111] bg-white dark:bg-[#080808] hover:border-[#ccc] dark:hover:border-[#1e1e1e] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
				{/* Thumbnail with blur overlay */}
				<div className="relative overflow-hidden bg-[#f5f5f5] dark:bg-[#0d0d0d] h-48">
					{!imgError ? (
						<img
							src={project.thumbnail_url}
							alt={`${project.name} thumbnail`}
							onError={() => setImgError(true)}
							className="w-full h-full object-cover blur-sm scale-105 brightness-75 dark:brightness-50"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center bg-[#f5f3ff] dark:bg-[#0e0b14]" />
					)}

					{/* Confidential overlay */}
					<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/10 dark:bg-black/20 backdrop-blur-[1px]">
						<div className="flex items-center gap-2 bg-white/90 dark:bg-black/80 border border-[#e0e0e0] dark:border-[#222] px-3 py-1.5 rounded-full shadow-sm">
							<svg
								className="w-3 h-3 text-[#888] dark:text-[#555]"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path d="M12 1C8.676 1 6 3.676 6 7v1H4v15h16V8h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v1H8V7c0-2.276 1.724-4 4-4zm0 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
							</svg>
							<span className="text-[10px] font-mono font-semibold text-[#666] dark:text-[#555] tracking-widest uppercase">
								NDA
							</span>
						</div>
					</div>

					{project.year && (
						<span className="absolute top-3 right-3 text-[10px] font-mono bg-black/60 dark:bg-white/10 text-white backdrop-blur-sm px-2 py-0.5 rounded-full">
							{project.year}
						</span>
					)}
				</div>

				{/* Body */}
				<div className="flex flex-col flex-1 p-5 gap-3">
					<div>
						<h4 className="font-poppins font-semibold text-[15px] text-black dark:text-[#D8D8D8] leading-snug mb-1.5">
							{project.name}
						</h4>
						{project.role && (
							<p className="text-[11px] font-mono text-[#aaa] dark:text-[#444] uppercase tracking-wider mb-2">
								{project.role}
							</p>
						)}
						<p className="text-[13px] text-[#666] dark:text-[#555] font-lato leading-relaxed line-clamp-3">
							{project.shortDesc || project.description}
						</p>
					</div>

					{/* Tags */}
					{project.tags?.length > 0 && (
						<div className="flex flex-wrap gap-1.5 mt-auto pt-2">
							{project.tags.slice(0, 5).map((tag, i) => (
								<TagChip key={i} tag={tag} />
							))}
						</div>
					)}

					{/* Actions */}
					<div className="flex items-center gap-3 pt-2 border-t border-[#f0f0f0] dark:border-[#111] mt-auto">
						<button
							onClick={() => setShowModal(true)}
							className="inline-flex items-center gap-1.5 text-[12px] font-poppins font-medium text-black dark:text-[#ccc] hover:text-[#444] dark:hover:text-white transition-colors">
							<svg
								className="w-3.5 h-3.5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2">
								<circle cx="11" cy="11" r="8" />
								<line x1="21" y1="21" x2="16.65" y2="16.65" />
							</svg>
							View Details
						</button>
						<span className="text-[#ddd] dark:text-[#222]">·</span>
						<p className="text-[11px] font-lato text-[#bbb] dark:text-[#333] italic">
							🔒 Confidential
						</p>
					</div>
				</div>
			</article>

			{showModal && (
				<ProjectModal project={project} onClose={() => setShowModal(false)} />
			)}
		</>
	);
};
