import React from "react";
import fixBitImage from "../assets/Screenshot 2024-07-13 021900.png"; // Replace with your actual image paths
import bookSellImage from "../assets/mysql.png"; // Replace with your actual image paths
import simonGameImage from "../assets/Screenshot 2024-07-13 021842.png"; // Replace with your actual image paths
import weatherAppImage from "../assets/mysql.png"; // Replace with your actual image paths

const projects = [
    {
      title: "Fix-Bit",
      image: fixBitImage,
      description: "A web application to streamline the process of handling hostel issues.",
      githubLink: "https://github.com/ritwik-raj30/fixBit",
      liveLink: "https://fix-bit.netlify.app/",
    },
    {
      title: "BookSell",
      image: bookSellImage,
      description: "An application where users can create and list their used books for sale.",
      githubLink: "https://github.com/yourusername/booksell",
      liveLink: "https://booksell.example.com",
    },
    {
      title: "Simon Game",
      image: simonGameImage,
      description: "A game developed using HTML, CSS, and JavaScript.",
      githubLink: "https://github.com/ritwik-raj30/Simons-game",
      liveLink: "https://ritwik-raj30.github.io/Simons-game/",
    },
  
  ];
  
  const Projects = () => {
    return (
      <div className="projects-container py-8 bg-black text-white flex justify-center items-center" id="work">
        <div className="w-full max-w-4xl p-4">
          <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="max-w-sm rounded overflow-hidden shadow-lg bg-black border border-gray-700 hover:shadow-2xl transition-shadow duration-300"
              >
                <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{project.title}</div>
                  <p className="text-gray-300 text-base">{project.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <a
                    href={project.githubLink}
                    className="inline-block bg-gray-700 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    className="inline-block bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                  >
                    Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;