
import React from "react";

const ProjectCard = ({ title, description,  video,}) => {




  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#204051] shadow-slate-300 rounded-2xl ">
      <video
       className="p-4"
       src={video}
       controls
       />
      <h3 className="px-4 text-xl md:text-2xl font-bold  text-white leading-normal">
        {title}
      </h3>
      <p className="px-4 text-md md:text-md text-white leading-tight py-2">
        {description}
      </p>
      
    </div>
  );
};

export default ProjectCard;
