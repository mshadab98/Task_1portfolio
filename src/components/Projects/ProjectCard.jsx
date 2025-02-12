
import React from "react";



const ProjectCard = ({ title, description, source, img,}) => {




  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#204051] shadow-slate-300 rounded-2xl ">
      <img src={img} alt="Project imges" className="p-5" />
      <h3 className="px-4 text-xl md:text-2xl font-bold  text-white leading-normal">
        {title}
      </h3>
      <p className="px-4 text-md md:text-md text-white leading-tight py-2">
        {description}
      </p>
      <button className="mt-4 px-5 py-3  bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg shadow-md transition">
        <a href={source}>Source code </a>
      </button>
    </div>
  );
};

export default ProjectCard;
