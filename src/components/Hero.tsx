import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-center bg-cover relative"
    >
      <Navbar />

      {/* Hero Section */}
      <div className="container grid lg:grid-cols-2 min-h-screen pt-16">
        {/* Left Side (Image) */}
        <div
          className="hidden lg:block bg-cover h-[850px]"
          style={{
            backgroundImage: "url(/image1.png)",
          }}
        ></div>

        {/* Right Side (Text) */}
        <div className="flex justify-center items-center relative lg:static pb-23">
          {/* Background Image for Mobile */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 lg:hidden"
            style={{
              backgroundImage: "url(/image1.png)",
            }}
          ></div>

          {/* Text Content */}
          <div className="z-10 text-white text-[30px] sm:text-[100px] font-bold leading-tight text-center lg:text-left -translate-y-10">
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Abdul</p>
            <p data-aos="zoom-in-up">Wasay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
