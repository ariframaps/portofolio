import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard"
import { GetProjects } from "../../../../../services/ProjectService";

export const ProjectList = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [projectList, setProjectList] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await GetProjects();
            setProjectList(data);
            console.log(data);
        }
        fetchProjects();
    }, [])

    return (
        <ul className="flex flex-col gap-[20px]">
            {projectList && projectList.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
            ))}
        </ul>
    )
}
