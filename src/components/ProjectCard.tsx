import React from "react";
import { Link } from "react-router-dom";
interface Props {
  imageUrl: string;
  title: string;
  description: string;
  projectUrl: string;
}
const ProjectCard = ({imageUrl,title,description,projectUrl}:Props) => {
  return (
    <div className="project flex gap-7 p-6 justify-center items-center  ">
      <div className="left">
        <img
          src={imageUrl}
          alt="project-img"
          width={500}
          height={300}
        />
      </div>
      <div className="right flex flex-col gap-3">
        <h1 className="text-4xl overflow-hidden ">{title}</h1>
        <p className="w-[72rem]">{description}</p>
        <Link to={projectUrl} className="text-purple-500">Visit Project</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
