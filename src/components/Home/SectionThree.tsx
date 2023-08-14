import React from "react";
import ProjectCard from "../ProjectCard";
import { projectsData } from "../../Data/projects";

const SectionThree = () => {
  return (
    <div className="section-three mt-9">
      <div className="section-two-heading ml-[20%]  ">
        <h1 className="text-black">RECENT WORKS</h1>
        <h1 className="text-purple-500 text-4xl font-semibold w-[37rem] overflow-hidden">
          We love what we do, check out some of our latest works
        </h1>
      </div>
      <div className="project-card-list mt-14 flex flex-col justify-center items-center">
        {projectsData.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
