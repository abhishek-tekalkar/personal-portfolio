import React from 'react'
import skills from "./data/skills.json"
const Skills = () => {
    return (
      <>
        <div className="container skills mt-20" id="skills">
          <h1 className='text-white text-4xl font-bold tracking-wider '>SKILLS</h1>
          <div className="flex justify-center items-center flex-wrap p-3 m-3">
            {skills.map((data) => (
              <>
                <div
                  className="w-3/2 h-2/3 m-5 justify-center items-center bg-sky-950 border-cyan-200 border-4 p-3"
                  key={data.id}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <img src={`/assets/${data.imageSrc}`} className='w-24 h-20 mx-auto' alt="" />
                  <h3 className='text-sky-300 text-2xl font-bold tracking-wider'>{data.title}</h3>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  };
  

export default Skills