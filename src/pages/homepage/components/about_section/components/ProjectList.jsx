import { useState } from "react";
import { ProjectCard } from "./ProjectCard"

export const ProjectList = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projectList = [
        1, 2, 3, 4
    ];

    return (
        <ul className="flex flex-col gap-[40px]">
            {projectList.map((project, index) => (
                <ProjectCard key={project} index={index} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
            ))}
        </ul>
    )
}
