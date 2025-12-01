import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "House Hunting Website",
      description: "BetaHouse is a real estate web app that lets users browse, rent, and buy homes across Lagos with ease. It features smooth property filtering, clear listing cards, and a simple flow that helps people compare prices, locations, and house details without stress. I built it to practice real estate style UI, property data handling, and user friendly navigation.",
      year: "2025",
      role: "Full Stack Developer",
      image: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1763934756/57f55acb-891e-4e26-a36a-3730926b55c7.png",
      liveLink: "https://beta-house-iota.vercel.app/",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Painting Service Website",
      description: "A responsive service website for a professional painting company. Includes sections for services, materials and a smart quote request system that requires on-site visits for accurate pricing",
      year: "2025",
      role: "Full Stack Developer",
      image: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1762955185/02319512-109a-4c5c-9158-f2e6a84a9130.png",
      liveLink: "https://climade-paints.vercel.app/",
      githubLink: ""
    },
    {
      id: 3,
      title: "A Pharmacy Website Landing Page",
      description: "Built a modern, responsive landing page for a local pharmacy to establish their online presence. The site highlights their services, business details, and contact information in a clean, accessible design.",
      year: "2025",
      role: "Front-end Developer",
      image: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1756946051/WhatsApp_Image_2025-09-04_at_01.33.00_3564640e_wexzua.jpg",
      liveLink: "https://oskajaypharmacy.com",
      githubLink: "#"
    }
  ];

  return (
    <>
      <section className="mx-4 lg:mx-20 mt-10 lg:mt-20">
        <h1 className="bebas-neue text-4xl lg:text-7xl text-white mb-4">FEATURED PROJECTS</h1>
        <p className="manrope text-[#C7C7C7] text-base lg:text-lg max-w-2xl">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </section>

      {projectsData.map((project) => (
        <section key={project.id} className="grid lg:grid-cols-2 gap-6 lg:gap-10 mx-4 lg:mx-20 mt-16 lg:mt-20">
            {/* Project Image */}
            <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-center">
              <h2 className="manrope text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
                {project.title}
              </h2>
              <p className="manrope text-[#C7C7C7] text-base lg:text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Project Info */}
              <div className="mb-6">
                <p className="manrope font-semibold text-white mb-2">PROJECT INFO</p>
                <hr className="border-[#484848]" />
                
                <div className="flex justify-between py-3 manrope text-[#C7C7C7]">
                  <p>Year</p>
                  <p className="text-white">{project.year}</p>
                </div>
                <hr className="border-[#484848]" />
                
                <div className="flex justify-between py-3 manrope text-[#C7C7C7]">
                  <p>Role</p>
                  <p className="text-white">{project.role}</p>
                </div>
                <hr className="border-[#484848]" />
              </div>

              {/* Links */}
              <div className="flex gap-6 manrope font-bold text-[#D3E97A] items-center">
                <a 
                  href={project.liveLink} 
                  className="flex items-center gap-2 hover:text-[#c1d865] transition-colors"
                >
                  LIVE DEMO <ArrowUpRight className="w-5 h-5" />
                </a>
                <a 
                  href={project.githubLink} 
                  className="flex items-center gap-2 hover:text-[#c1d865] transition-colors"
                >
                  SEE ON GITHUB <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>
      ))}
    </>
  );
};

export default Projects;