import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";


const HeroMain = () => {
  return (
    <div className="pt-[120px] pb-16 p-10 min-h-screen flex flex-col justify-center">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroImg />
      </div>
    </div>
  );
};

export default HeroMain;

