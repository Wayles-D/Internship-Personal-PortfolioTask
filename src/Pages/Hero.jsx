
import React from "react";
import { Linkedin, Github, Circle } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="grid lg:grid-cols-2 items-center gap-8 mx-4 lg:mx-20 mt-10 lg:mt-20">
        <div>
          <h1 className="bebas-neue text-5xl lg:text-7xl xl:text-8xl text-white leading-tight">
            HI, I AM<br />
            ROBERT GARCIA.
          </h1>
          <p className="manrope text-[#C7C7C7] text-base lg:text-lg mt-4 lg:mt-6 leading-relaxed max-w-lg">
            A Sydney based front-end developer passionate about building
            accessible and user friendly websites.
          </p>

          {/* Contact-buttons */}
          <div className="flex gap-3 lg:gap-4 mt-6 lg:mt-8 items-center">
            {/* Button */}
            <button className="bg-[#D3E97A] text-black rounded-full px-5 py-3 lg:px-6 lg:py-3 flex items-center gap-2 manrope font-semibold text-sm lg:text-base hover:bg-[#c1d865] transition-colors">
              CONTACT ME
              <Circle className="h-2 w-2 fill-black" />
            </button>

            {/* LinkedIn icon */}
            <a 
              href="#" 
              className="bg-transparent border-0 p-0 hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-white w-5 h-5 lg:w-6 lg:h-6" />
            </a>

            {/* GitHub icon */}
            <a
              href="https://github.com/Wayles-D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-0 p-0 hover:opacity-80 transition-opacity"
              aria-label="GitHub"
            >
              <Github className="text-white w-5 h-5 lg:w-6 lg:h-6" />
            </a>
          </div>
        </div>

        {/* Image div */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-[#D9D9D9] rounded-2xl overflow-hidden w-full max-w-md lg:max-w-lg">
            <img 
              src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764346879/93248c50-945a-4ece-8ce1-8642b69fbcb3.png" 
              alt="Robert Garcia" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;