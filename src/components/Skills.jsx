import React from "react";
import skills from "./data/skills.json";
const Skills = () => {
  return (
    <>
      <div className="container skills mt-20" id="skills">
        <h1 className="text-white text-4xl font-bold tracking-wider ">
          SKILLS
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-3 m-3 ">
          {skills.map((data) => (
            <div
              className="bg-sky-950 border-cyan-200 border-4 p-3 flex flex-col items-center justify-center w-40"
              key={data.id}
            >
              <img
                src={`/assets/${data.imageSrc}`}
                className="w-24 h-20 mx-auto lg:w-22"
                alt={data.title}
              />
              <h3 className="text-sky-300 text-2xl font-bold tracking-wider mt-2">
                {data.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
