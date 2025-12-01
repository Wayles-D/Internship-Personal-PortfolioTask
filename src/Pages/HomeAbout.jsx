import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
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
            I am a Full Stack developer based in Nigeria
          </h3>
          <p className="manrope text-[#C7C7C7] text-base lg:text-lg mb-8 leading-relaxed">
            I am a Full Stack developer based in Nigeria looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
          </p>

          <Link to="/about" className="manrope text-[#D3E97A] font-bold text-base uppercase border-b-2 border-[#D3E97A] pb-1 hover:text-white hover:border-white transition-colors inline-block">
            MORE ABOUT ME
          </Link>
        </div>
      </div>

      {/* Image Section - Mobile Only */}
      <div className="w-full md:hidden">
         <div className="bg-[#D9D9D9] rounded-2xl overflow-hidden w-full h-[400px]">
            <img
              src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1764576321/603c06ee-bb6c-40ec-9c9d-05b02cfc1231_wemem2.jpg"
              alt="About Me"
              className="w-full h-full object-cover object-top"
            />
         </div>
      </div>
    </section>
  );
};

export default HomeAbout;
