import React from "react";
import logo from "../assets/Marketopedia_Logo.png";

const Header = () => {
  return (
    <main className="flex justify-between items-center px-10 py-2 fixed top-0 left-0 right-0 shadow-lg z-20 bg-white text-black">
      <img
        src={logo}
        alt=""
        className="w-16 h-16 rounded-full border border-[#5471FF]"
      />
      <span className="hover:text-[#5471FF] cursor-pointer">Say Hello</span>
    </main>
  );
};

export default Header;
