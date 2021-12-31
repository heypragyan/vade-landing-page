import Image from "next/image";
import React from "react";
import skipTheHassle from '../assets/Assets/Images/hassle.png'

const SkipTheHassle = () => {
  return (
    <div className="pt-20 px-6 md:px-36" id="skip-the-hassle">
      <h1 className="font-bold text-5xl md:text-6xl pb-20">
        <span className="text-[#8B12FC]">Skip </span>
        The Hassle
      </h1>
      <Image src={skipTheHassle} layout="responsive" alt="Illustration" placeholder="blur"/>
    </div>
  );
};

export default SkipTheHassle;
