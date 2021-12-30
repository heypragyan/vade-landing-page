import React from "react";
import Logo from "svg-assets/Logo";

const Navbar = () => {
  return (
    <header className="w-full bg-[#FFFFFF] flex justify-between items-center px-8 py-3 shadow-lg">
      <Logo className="h-6"/>
      <nav className="flex justify-between w-1/2">
        <a href="">Skip the Hassle</a>
        <a href="">Cruise through Backend</a>
        <a href="">About Us</a>
      </nav>
      <button className="bg-[#8B12FC] p-3 rounded-lg font-normal text-white">Get Early Access</button>
    </header>
  );
};

export default Navbar;
