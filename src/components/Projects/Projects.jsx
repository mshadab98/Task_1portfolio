import React from "react";
import ProjectCard from "./ProjectCard"; 
import projectData from "./data/data"; 

const Projects = () => {
  return (
    <section id="Project" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:mx-20">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#204051] mb-10 mr-30 underline underline-offset-2">
          All Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectData.map((project,index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
               video={project.video}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
