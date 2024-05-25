import { TechnologyUsed } from "./TechnologyUsed"

export const ProjectCard = ({ project, index, hoveredIndex, setHoveredIndex }) => {
    return (
        <a href={project.web_link} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={(() => setHoveredIndex(null))} className={`dark:bg-[#080E16] flex gap-5 lg:p-3 py-3 lg:py-5 rounded-md bg-white border border-0 dark:border-slate-900 border-b-2 duration-300 hover:bg-[#0B1420] hover:bg-[#FAFAFC] cursor-pointer hover:-translate-y-px ${(hoveredIndex !== null && index !== hoveredIndex) ? 'blur-[2px]' : ''}`}>
            <img className="min-w-32 lg:min-w-40 dark:bg-[#060A13] bg-slate-100 min-h-24 rounded-lg" src={project.thumbnail_url} alt="thumbnail" />
            <div>
                <div className="flex gap-3 items-center">
                    <h5 className="font-poppins font-semibold text-lg leading-none">{project.name}</h5>
                    <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                    </svg>
                </div>
                <p className="text-[#717171] font-lato my-3.5 mb-5">{project.description}</p>
                <ul className="flex gap-2.5 flex-wrap">
                    {project.topics.map(((tech, index) => (
                        <TechnologyUsed key={index} tech={tech} />
                    )))}
                </ul>
            </div>
        </a>
    )
}
