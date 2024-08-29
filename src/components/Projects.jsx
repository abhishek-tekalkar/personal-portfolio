import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className=" mx-auto projects lg:mt-20 px-4 md:mt-2" id="projects">
        <h1 className="text-white text-4xl font-bold tracking-wider text-center">
          PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ">
          {project.map((data) => (
            <div key={data.id} className="col-span-1">
              <div
                className="card bg-sky-950 w-[21rem] h-auto border-cyan-200 border-4"
                
              >
                <div className="img flex justify-center items-center p-3">
                  <img
                    src={data.imageSrc} 
                    className="w-60 h-32 object-cover"
                    alt={data.title}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title text-sky-300 text-2xl font-bold tracking-wider">
                    {data.title}
                  </h5>
                  <p className="card-text text-white text-lg tracking-wider">
                    {data.description}
                  </p>

                  <div className="btn mt-3 flex justify-around ">
                  <a
                      href={data.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-blue-300 font-medium text-lg px-3 py-1.5"
                    >
                      Demo
                    </a>
                    <a
                      href={data.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-blue-300 font-medium text-lg px-3 py-1.5"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
