import react from "react";

const ProjectCard = ({ title, description, demoLink, video, sourceCode }) => {
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
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 ">
        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
          {sourceCode}
        </button>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
          {demoLink}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
