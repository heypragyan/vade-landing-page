import NewsLetter from "@components/Newsletter";
import Image from "next/image";
import React from "react";
import DotsPattern from "svg-assets/DotsPattern";
import heroBg from "../assets/Assets/Images/hero_background.png";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] max-w-6xl m-auto">
      {/* <DotsPattern className='w-full -mt-8 absolute top-0 left-0'/> */}
      {/* <div className="absolute left-0 w-full">
        <Image src={heroBg} layout="responsive" />
      </div> */}
      <div className="m-auto text-center space-y-5 pt-28">
        <h1 className="text-6xl font-bold w-full md:w-1/2 m-auto">
          Build Backend Systems in Minutes
        </h1>
        <p className="font-semibold text-xl w-10/12 md:w-2/5 m-auto">
          Get ridiculously creative with your products and let us do the hard
          work for you!
        </p>
        <NewsLetter className="m-auto w-max" id="heroLetter"/>
      </div>
    </div>
  );
};

export default Hero;
