import React from "react";
import { motion } from "framer-motion";
import hero from "./data/hero.json";
import pdf from "../pdf/resume.pdf";
function Hero() {
    return (
    <>
      <div className="container flex justify-between items-start min-h-screen">
        <div className="left text-white mt-60 flex tracking-widest  flex-col  justify-start self-start">
          <div>
            <h1 className="lg:text-7xl text-5xl text-sky-300 font-bold">
              Abhishek Tekalkar
            </h1>

            <h3 className=" text-sky-100 text-xl lg:text-3xl mt-3 mb-3 hover:text-yellow-400 hover:font-bold hover:text-2xl">
              Aspiring Software Engineer
            </h3>
          </div>
          <div className="flex justify-center mt-3">
            {" "}
            {/* Center the button */}
            <a
              href={pdf}
              className="text-white bg-sky-700 hover:bg-sky-950 focus:ring-4 focus:ring-blue-300 font-medium lg:text-2xl lg:px-5 lg:py-2.5 lg:me-2 lg:mb-2 lg:w-48 text-sm px-3 py-2.5 text-center mr-2 mb-2 w-40"
            >
              Download resume
            </a>
          </div>
        </div>
        <div className="right">
          <div className="mt-60 flex justify-end self-end lg:h-60 lg:w-60 lg:hover:h-80 lg:hover:w-80 hover:duration-80 hover:duration-300 h-40 w-40">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
