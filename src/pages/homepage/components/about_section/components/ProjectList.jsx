import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { GetProjects } from "../../../../../services/ProjectService";
import github from "../../../../../assets/logo/github.svg";

export const ProjectList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [projectList, setProjectList] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await GetProjects();
      setProjectList(data);
    };
    fetchProjects();
  }, []);

  return (
    <ul className="flex flex-col gap-[20px]">
      {projectList &&
        projectList.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      <a
        href="https://github.com/ariframaps"
        className="flex items-center gap-2 font-poppins block mt-7 bg-black text-white dark:text-slate-300 w-fit p-3 px-4 text-xs md:text-md rounded-md border dark:border-slate-700 border-black hover:bg-transparent dark:hover:bg-slate-200 hover:text-black duration-200"
      >
        More on github
        <img className="w-[20px]" src={github} alt="github logo" />
      </a>
    </ul>
  );
};
