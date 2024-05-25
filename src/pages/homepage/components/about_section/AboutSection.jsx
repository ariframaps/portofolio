import { AboutContent } from "./components/AboutContent"
import { ProjectList } from "./components/ProjectList"

export const AboutSection = () => {
    return (
        <section id="about_section" className="px-4 md:px-8 xl:px-0 min-h-screen pt-[90px] pb-[70px] lg:pt-[120px] lg:pb-[150px]">
            <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-start gap-[70px] max-w-screen-xl m-auto">
                <article>
                    <div className="sticky top-14 lg:max-w-xl">
                        <h2 className="text-center lg:text-start font-semibold text-3xl md:text-[40px] font-poppins mb-8 md:mb-[40px] leading-none">About Me</h2>
                        <AboutContent />
                        <a href="#" className="flex items-center gap-2 font-poppins block mt-7 bg-black text-white w-fit p-3 px-4 rounded-md border border-black hover:bg-transparent hover:text-black duration-200">
                            See full resume
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </article>
                <article className="flex-1">
                    <h3 className="pt-3 border border-0 border-t-2 lg:border-0 font-semibold text-[20px] font-poppins mb-[40px]">Project</h3>
                    <ProjectList />
                </article>
            </div>
        </section>
    )
}
