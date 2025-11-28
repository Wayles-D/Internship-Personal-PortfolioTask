import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Promotional landing page for our favourite show",
      description: "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      year: "2023",
      role: "Front-end Developer",
      image: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764345900/5ce14dc2-d5d2-4b40-b6de-e3aa455854b9.png",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Blog site for World News",
      description: "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.",
      year: "2022",
      role: "Front-end Developer",
      image: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764346263/f0b78116-9f7b-4d41-9784-9fdd315048c2.png",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "E-commerce product page",
      description: "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
      year: "2022",
      role: "Front-end Developer",
      image: "https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764346309/cf909833-8e80-4a79-8c82-376e1b75eefa.png",
      liveLink: "#",
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