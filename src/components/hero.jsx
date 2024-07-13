// Hero.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import NightSky from './NightSky';

const Hero = () => {
  const resumeLink = "https://indigo-cate-23.tiiny.site/"; // Replace with your resume link

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 max-w-full min-h-[100vh] mx-auto py-8 bg-black">
      <NightSky />
      <div className="flex flex-col items-center justify-center col-span-1 lg:col-span-3 z-10">
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          I AM
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center col-span-1 lg:col-span-3 z-10">
        <TypeAnimation
          sequence={[
            'a developer', // Types 'a developer'
            2000, // Waits 2 seconds
            'a consultant', // Types 'a consultant'
            2000, // Waits 2 seconds
            'Full Stack', // Types 'a backend engineer'
            2000, // Waits 2 seconds
            '', // Deletes everything
            1000, // Waits 1 second before starting over
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          className="text-4xl sm:text-6xl lg:text-9xl font-extrabold text-center text-white mt-2"
        />
      </div>
      <div className="flex flex-col items-center justify-center col-span-1 lg:col-span-3 z-10 px-4">
        <p className="mt-4 text-center text-base sm:text-lg md:text-xl text-white max-w-lg font-bold">
          Welcome to my portfolio! I'm Ritwik Raj, a Computer Science Engineering student at 
          <span className="text-orange-500"> Birla Institute of Technology</span>, Mesra. I specialize in Fullstack Development and Competitive Programming. A beginner in System Design. Thank you for visiting!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center col-span-1 lg:col-span-3 z-10">
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 text-base sm:text-lg font-bold text-white rounded-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
