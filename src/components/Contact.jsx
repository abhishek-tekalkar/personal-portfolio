import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1 className='text-white text-4xl font-bold tracking-wider'>CONTACT ME</h1>
        <div
          className="mt-3 flex contact-icon flex-row p-3 m-3 justify-center items-center"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {/* <a href="https://www.google.com" target="_blank" className="text-white bg-black m-2 h-16 w-16 flex justify-center items-center rounded-full border-2 border-yellow-500">
            <FaInstagram className="icons h-32 w-8" />
          </a>
          <a href="https://www.google.com" target="_blank" className="text-white bg-black m-2 h-16 w-16 flex justify-center items-center rounded-full border-2 border-yellow-500">
            <CiFacebook className="icons h-32 w-8" />
          </a> */}
          <a href="https://www.linkedin.com/in/abhishek-tekalkar-636932128/" target="_blank" className="text-white bg-black m-2 h-16 w-16 flex justify-center items-center rounded-full border-2 border-yellow-500">
            <CiLinkedin className="icons h-32 w-8" />
          </a>
          {/* <a href="https://www.google.com" target="_blank" className="text-white bg-black m-2 h-16 w-16 flex justify-center items-center rounded-full border-2 border-yellow-500">
            <FaSquareXTwitter className="icons h-32 w-8" />
          </a> */}
          <a href="https://github.com/abhishek-tekalkar" target="_blank" className="text-white bg-black m-2 h-16 w-16 flex justify-center items-center rounded-full border-2 border-yellow-500">
            <FaGithubSquare className="icons h-32 w-8" />
          </a>
          <a
            href="mailto:abhitekalkar21@gmail.com"
            target="_blank"
            className="text-white bg-black m-2 h-16 w-16 flex justify-center items-center rounded-full border-2 border-yellow-500"
          >
            <SiGmail className="icons  h-32 w-8" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;