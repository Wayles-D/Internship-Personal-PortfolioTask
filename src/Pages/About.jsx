import React from "react";
import { Circle } from "lucide-react";
import { LuDownload } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <section className="mx-4 lg:mx-20 mt-20 lg:mt-32">
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* Left Column - Title */}
        <div>
           <h1 className="bebas-neue text-5xl lg:text-7xl text-white uppercase">ABOUT ME</h1>
        </div>

        {/* Right Column - Content */}
        <div>
          <h3 className="manrope text-2xl lg:text-3xl text-white font-medium mb-6 leading-tight">
            I am a Full Stack developer based in Nigeria.
          </h3>
          <p className="manrope text-[#C7C7C7] text-base lg:text-lg mb-8 leading-relaxed">
            I am a Full Stack developer based in  Nigeria looking for exciting opportunities. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
          </p>

          <div className="flex gap-4 items-center">
            <button className="bg-[#D3E97A] text-black rounded-full px-6 py-3 flex items-center gap-3 manrope font-bold text-sm lg:text-base hover:bg-[#c1d865] transition-colors">
              DOWNLOAD RESUME
              <Circle className="h-2 w-2 fill-black hidden lg:block" />
              <LuDownload className="h-4 w-4 lg:hidden bg-black text-white rounded-full p-1 h-6 w-6" />
            </button>

            <a 
              href="#" 
              className="bg-[#222222] p-3 rounded-full hover:bg-[#333333] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-[#D3E97A] w-5 h-5 lg:w-6 lg:h-6" />
            </a>
            <a 
              href="#" 
              className="bg-[#222222] p-3 rounded-full hover:bg-[#333333] transition-colors"
              aria-label="GitHub"
            >
              <BsGithub className="text-[#D3E97A] w-5 h-5 lg:w-6 lg:h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full">
         <div className="bg-[#D9D9D9] rounded-2xl overflow-hidden w-full h-[400px] lg:h-[600px]">
            <img
              src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764576321/603c06ee-bb6c-40ec-9c9d-05b02cfc1231_wemem2.jpg"
              alt="About Me"
              className="w-full h-full object-cover object-top"
            />
         </div>
      </div>

      <hr className="border-[#484848] mt-20 lg:mt-32" />

      {/* My Capabilities Section */}
      <div className="grid lg:grid-cols-2 gap-8 mt-20 lg:mt-32">
        <div>
          <h2 className="bebas-neue text-5xl lg:text-7xl text-white uppercase">MY CAPABILITIES</h2>
        </div>
        <div>
          <p className="manrope text-[#C7C7C7] text-base lg:text-lg mb-8 leading-relaxed">
            I am always looking to add more skills. Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.
          </p>
          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JAVASCRIPT", "REACTJS", "ACCESSIBILITY", "FIGMA", "TAILWIND CSS"].map((skill) => (
              <span key={skill} className="border border-[#484848] text-white px-6 py-3 rounded-full text-sm lg:text-base font-bold uppercase hover:border-[#D3E97A] hover:text-[#D3E97A] transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-[#484848] mt-20 lg:mt-32" />

      {/* My Experience Section */}
      <div className="grid lg:grid-cols-2 gap-8 mt-20 lg:mt-32 mb-20">
        <div>
          <h2 className="bebas-neue text-5xl lg:text-7xl text-white uppercase">MY EXPERIENCE</h2>
        </div>
        <div className="space-y-12">
          {[
            {
              role: "Freelance Developer",
              date: "Nov 2023 — Present",
              company: null,
              description: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
              role: "Front-End Intern",
              date: "Sep 2023 — Nov 2023",
              company: "Roos Tech",
              description: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          ].map((exp, index) => (
            <div key={index}>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-2">
                <h3 className="manrope text-xl lg:text-2xl text-white font-medium">{exp.role}</h3>
                <span className="manrope text-[#C7C7C7] text-sm lg:text-base mt-1 lg:mt-0">{exp.date}</span>
              </div>
              {exp.company && (
                <p className="manrope text-[#D3E97A] text-base font-medium mb-4 mt-2 lg:mt-0">{exp.company}</p>
              )}
              <p className={`manrope text-[#C7C7C7] text-base lg:text-lg leading-relaxed ${!exp.company ? 'mt-4' : ''}`}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
