import { AboutContent } from "./components/AboutContent";

export const AboutSection = () => {
	return (
		<section
			id="about_section"
			className="relative z-[2] px-2 md:px-8 xl:px-0 pt-[60px] pb-[80px] lg:pt-[100px] lg:pb-[120px]">
			<div className="max-w-screen-xl mx-auto">
				<div className="mb-10 md:mb-14">
					<p className="font-mono text-xs tracking-[0.2em] uppercase text-[#888] dark:text-[#555] mb-3">
						Who I Am
					</p>
					<h2 className="font-poppins font-semibold text-3xl md:text-[40px] leading-none text-black dark:text-[#D8D8D8]">
						About Me
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
					{/* Left sticky bio */}
					<article className="lg:sticky lg:top-20">
						<AboutContent />
						<a
							href="https://docs.google.com/document/d/1jaR5SJuTWuJjqDRPMF3w44H0L_g9VUR-1JUTdf708pc/edit?tab=t.0"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 mt-8 font-poppins text-sm bg-black text-white dark:bg-[#0d0d0d] dark:text-[#ccc] dark:border dark:border-[#222] px-5 py-2.5 rounded-lg hover:bg-[#222] dark:hover:bg-[#161616] transition-colors duration-200">
							<svg
								className="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path
									fillRule="evenodd"
									d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z"
									clipRule="evenodd"
								/>
							</svg>
							View Resume
						</a>
					</article>

					{/* Right: quick facts / highlights */}
					<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{[
							{
								icon: "🗓️",
								label: "Started coding",
								value: "2020",
								sub: "Self-taught from scratch",
							},
							{
								icon: "💼",
								label: "Experience",
								value: "Professional",
								sub: "Frontend & Fullstack",
							},
							{
								icon: "📍",
								label: "Based in",
								value: "Indonesia",
								sub: "Available remotely",
							},
							{
								icon: "🚀",
								label: "Currently into",
								value: "React & Next.js",
								sub: "With TypeScript",
							},
							{
								icon: "🔧",
								label: "Also works with",
								value: "Node.js / PHP",
								sub: "REST, Prisma, Docker",
							},
							{
								icon: "✉️",
								label: "Open to",
								value: "New opportunities",
								sub: "Freelance & full-time",
							},
						].map((item, i) => (
							<div
								key={i}
								className="p-5 rounded-xl border border-[#ebebeb] dark:border-[#111] bg-white dark:bg-[#080808] hover:border-[#ddd] dark:hover:border-[#1a1a1a] transition-colors">
								<div className="text-2xl mb-3">{item.icon}</div>
								<p className="text-[11px] font-mono text-[#aaa] dark:text-[#444] uppercase tracking-wider mb-1">
									{item.label}
								</p>
								<p className="font-poppins font-semibold text-xl text-black dark:text-[#D8D8D8] leading-snug">
									{item.value}
								</p>
								<p className="text-[12px] font-lato text-[#888] dark:text-[#555] mt-0.5">
									{item.sub}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
