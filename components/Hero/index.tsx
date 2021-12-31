import NewsLetter from "@components/Newsletter";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] m-auto bg-[url(/herobg.png)] bg-cover pb-36 md:pb-96 bg-origin-border [background-position-y:center] [background-position-x:left]">
      <div className="m-auto text-center space-y-5 pt-24 md:pt-28 max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-bold w-full md:w-3/5 m-auto drop-shadow-md">
          Build Backend Systems in Minutes
        </h1>
        <p className="font-semibold text-base md:text-xl w-10/12 md:w-2/5 m-auto pb-6 drop-shadow-xl">
          Get ridiculously creative with your products and let us do the hard
          work for you!
        </p>
        <NewsLetter className="m-auto w-max" id="heroLetter"/>
      </div>
    </div>
  );
};

export default Hero;
