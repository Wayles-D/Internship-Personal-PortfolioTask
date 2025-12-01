
import React from "react";
import { Circle } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";



const Hero = () => {
  return (
    <>
      <section className="grid lg:grid-cols-2 items-center gap-8 mx-4 lg:mx-20 mt-10 lg:mt-20">
        <div>
          <h1 className="bebas-neue text-5xl lg:text-7xl xl:text-8xl text-white leading-tight">
            HI, I AM<br />
            DANIEL TOSOEDO.
          </h1>
          <p className="manrope text-[#C7C7C7] text-base lg:text-lg mt-4 lg:mt-6 leading-relaxed max-w-lg">
            Passionate about solving real-world problems with clean code and powerful logic. 
            I see challenges as puzzles — and I build solutions that speak for themselves.
          </p>

          {/* Contact-buttons */}
          <div className="flex gap-3 lg:gap-4 mt-6 lg:mt-8 items-center">
            {/* Button */}
            <button className="bg-[#D3E97A] text-black rounded-full px-5 py-3 lg:px-6 lg:py-3 flex items-center gap-2 manrope font-semibold text-sm lg:text-base hover:bg-[#c1d865] transition-colors">
              CONTACT ME
              <Circle className="h-2 w-2 fill-black hidden lg:block" />
              <BsArrowUpRight className="h-4 w-4 lg:hidden bg-black text-white rounded-full p-1 h-6 w-6" />
            </button>

            {/* LinkedIn icon */}
            <a 
              href="#" 
              className="bg-transparent bg-white/20 p-2 rounded-full border border-0  hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-6 h-6 text-[#D3E97A]" />
            </a>

            {/* GitHub icon */}
            <a
              href="https://github.com/Wayles-D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent bg-white/20 p-2 rounded-full border border-0 hover:opacity-80 transition-opacity"
              aria-label="GitHub"
            >
              <BsGithub className="text-[#D3E97A] w-6 h-6 lg:w-6 lg:h-6" />
            </a>
          </div>
        </div>

        {/* Image div */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-[#D9D9D9] rounded-2xl overflow-hidden w-full max-w-md lg:max-w-lg">
            <img 
              src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764576321/603c06ee-bb6c-40ec-9c9d-05b02cfc1231_wemem2.jpg" 
              alt="Daniel Tosoedo" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;