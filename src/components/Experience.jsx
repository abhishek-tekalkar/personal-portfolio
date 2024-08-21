import React from 'react'
import experience from "./data/experience.json"
const Experience = () => {
    return (
      <>
        <div className="container ex" id="experience">
          <h1 className='text-white text-4xl font-bold tracking-wider '>EXPERIENCE</h1>
          {experience.map((data) => {
            return (
              <>
                <div
                  key={data.id}
                  className="text-center my-4" 
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                
                  <div className="bg-sky-950 border-cyan-200 border-4 mx-auto w-2/3 p-3 flex flex-col items-center ">
                    <h2 className='text-sky-300 text-2xl font-bold tracking-wider'>{data.role}</h2>
                    <h4>
                      <span style={{ color: "yellowgreen" }}>
                        {data.startDate} {data.endDate}{" "}
                      </span>{" "}
                      <span style={{ color: "white" }}>{data.location}</span>
                    </h4>
                    <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                    <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };

export default Experience