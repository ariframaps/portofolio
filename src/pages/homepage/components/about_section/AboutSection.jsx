import { AboutContent } from "./components/AboutContent"
import { ProjectList } from "./components/ProjectList"

export const AboutSection = () => {
    return (
        <section className="min-h-screen py-[120px] sticky top-0 overflow-clip">
            <div className="relative flex justify-between gap-[120px] max-w-screen-xl m-auto">
                <div>
                    <article className="sticky top-16 max-w-xl">
                        <h2 className="font-semibold text-[40px] font-poppins mb-[40px] leading-none">About Me</h2>
                        <AboutContent />
                    </article>
                </div>
                <article className="flex-1">
                    <h3 className="font-semibold text-[20px] font-poppins mb-[40px]">Project</h3>
                    <ProjectList />
                </article>
            </div>
        </section>
    )
}
