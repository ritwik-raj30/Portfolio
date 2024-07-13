import React from "react";
import aboutPic from "../assets/about (1).jpg"; // Replace with the path to your picture

const About = () => {
    return (
      <div className="about-container py-8 bg-black text-white flex justify-center items-center" id="about">
        <div className="w-full max-w-4xl p-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
            <img
              src={aboutPic}
              alt="About"
              className="w-full h-1 md:h-auto rounded-lg shadow-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">About Me</h2>
            <p className="text-lg text-gray-300">
              Hi, I'm Ritwik Raj , a passionate developer,Competitive Programmer , dev ops Enthusiast with experience in
              front-end and back-end technologies. I love creating web
              applications that provide great user experiences. My skills include
              JavaScript, React, Node.js, and more. I'm always eager to learn new
              technologies and take on challenging projects.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;