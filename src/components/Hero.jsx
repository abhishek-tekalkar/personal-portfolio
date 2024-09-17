import React, { useEffect, useRef } from "react";
import hero from "./data/hero.json";
import pdf from "../pdf/resume.pdf";
import Typed from "typed.js";
import pic from "../assets/profile-pic.png";
function Hero() {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Abhishek Tekalkar"],
      typeSpeed: 50,
      backDelay: 3000,
      backSpeed: 50,
      showCursor: false,
      // cursorChar: "$",
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container flex flex-col-reverse md:flex-row md:justify-between items-start md:mb-48 mb-16">
        <div className="left text-white md:mt-60 mt-20 flex tracking-widest flex-col justify-center self-center md:justify-start md:self-start">
          <div>
            <h1 ref={typedRef} className="lg:text-7xl text-4xl md:text-5xl text-sky-300 font-bold">
            {/* here is my name  */}
            </h1>
            
            <h3 className=" text-sky-100 text-lg lg:text-3xl md:text-xl mt-3 mb-3 hover:text-yellow-400  hover:font-medium hover:text-3xl">
              Aspiring Software Engineer
            </h3>
          </div>
          <div className="flex justify-center mt-3">
            {" "}
            {/* Center the button */}
            <a
              href={pdf}
              className="text-white bg-sky-700 hover:bg-sky-950 focus:ring-4 focus:ring-blue-300 font-medium lg:text-2xl md:text-xl lg:px-5 lg:py-2.5 lg:me-2 lg:mb-2 lg:w-48 md:w-36 md:h-20 text-sm px-3 py-2.5 text-center mr-2 mb-2 w-28 h-16"
            >
              Download resume
            </a>
          </div>
        </div>
        <div className="right flex justify-center self-center">
          <div className="mt-28 md:mt-60 flex md:justify-end md:self-end lg:h-60 lg:w-60 lg:hover:h-80 lg:hover:w-80 hover:duration-80 hover:duration-300 md:h-40 md:w-40">
            <img src={pic} alt="hero" className="rounded-full w-56 h-56"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
