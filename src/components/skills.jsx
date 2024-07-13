import React, { useEffect, useState } from "react";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/icons8-node-js-48.png";
import expressIcon from "../assets/firebase.jpg";
import mongoIcon from "../assets/mongodb_original_wordmark_logo_icon_146425.png";
import pythonIcon from "../assets/css.png"; // Correct this import as needed
import tailwind from "../assets/tailwind.png"
import git from "../assets/git.png"
import gitLab from "../assets/gitlab.png"
import Latex from "../assets/lotex.png"
import javaIcon from "../assets/icons8-c-96.png";
import "../assets/skills.css";

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".inner-container");
      const windowHeight = window.innerHeight;
      const top = container.getBoundingClientRect().top;

      if (top < windowHeight * 0.75) {
        setAnimate(true);
      } else {
        setAnimate(false); // Optional: Remove this line if you don't want to reset the animation
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    if (animate) {
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.add("animate-slide-right");
        }, index * 300); // Adjust delay as needed for staggered animation
      });
    } else {
      sections.forEach((section) => {
        section.classList.remove("animate-slide-right");
      });
    }
  }, [animate]);

  return (
    <div className="skills-container py-8 bg-black text-white">
      <div className="max-w-screen-md mx-auto">
        <div className={`inner-container ${animate ? "animate-slide-right" : ""}`}>
          <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>

          {/* Front End Section */}
          <div className="section mb-8 p-4 shadow-lg shadow-white/50">
            <h3 className="text-3xl font-semibold text-left mb-4">Front End</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
              <div className="skill-item flex flex-col items-center">
                <img src={htmlIcon} alt="HTML5" className="w-16 h-16 mb-2" />
                <p className="text-lg">HTML5</p>
              </div>
              <div className="skill-item flex flex-col items-center">
                <img src={cssIcon} alt="CSS3" className="w-16 h-16 mb-2" />
                <p className="text-lg">CSS3</p>
              </div>
              <div className="skill-item flex flex-col items-center">
                <img src={tailwind} alt="CSS3" className="w-16 h-16 mb-2" />
                <p className="text-lg">Tailwind</p>
              </div>
              <div className="skill-item flex flex-col items-center">
                <img src={jsIcon} alt="JavaScript" className="w-16 h-16 mb-2" />
                <p className="text-lg">JavaScript</p>
              </div>
              <div className="skill-item flex flex-col items-center">
                <img src={reactIcon} alt="React" className="w-16 h-16 mb-2" />
                <p className="text-lg">React</p>
              </div>
              {/* Add more front end skill items here */}
            </div>
          </div>

          {/* Back End Section */}
          <div className="section mb-8 p-4 shadow-lg shadow-white/50">
            <h3 className="text-3xl font-semibold text-left mb-4">Back End</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
              <div className="skill-item flex flex-col items-center">
                <img src={nodeIcon} alt="Node.js" className="w-16 h-16 mb-2" />
                <p className="text-lg">Node.js</p>
              </div>
              <div className="skill-item flex flex-col items-center">
                <img src={expressIcon} alt="Express.js" className="w-16 h-16 mb-2" />
                <p className="text-lg">firebase</p>
              </div>
              <div className="skill-item flex flex-col items-center">
                <img src={mongoIcon} alt="MongoDB" className="w-16 h-16 mb-2" />
                <p className="text-lg">MongoDB</p>
              </div>
              {/* Add more back end skill items here */}
            </div>
          </div>

          {/* Languages Section */}
          <div className="section mb-8 p-4 shadow-lg shadow-white/50">
            <h3 className="text-3xl font-semibold text-left mb-4">Languages/tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
             
              <div className="skill-item flex flex-col items-center">
                <img src={javaIcon} alt="Java" className="w-16 h-16 mb-2" />
                <p className="text-lg">c++</p>
              </div>
              <div className="skill-item flex flex-col items-center">
                <img src={git} alt="Java" className="w-16 h-16 mb-2" />
                <p className="text-lg">version control</p>
              </div>
              <div className="skill-item flex flex-col items-center">
                <img src={gitLab} alt="Java" className="w-16 h-16 mb-2" />
                <p className="text-lg">GitLab</p>
              </div>
              <div className="skill-item flex flex-col items-center">
                <img src={Latex} alt="Java" className="w-16 h-16 mb-2" />
                <p className="text-lg">latex</p>
              </div>
              {/* Add more language skill items here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
