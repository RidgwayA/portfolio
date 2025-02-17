import React from "react";
import { RiPentagonLine } from 'react-icons/ri';

const HeroImg = () => {
  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden">
      {/* Pentagon Positioned Behind Image Without Affecting Layout */}
      <div className="absolute inset-0 flex justify-center items-center -z-10 pointer-events-none">
        <RiPentagonLine className="h-[500px] w-[500px] text-cyan animate-[spin_20s_linear_infinite] blur-lg opacity-50" />
      </div>

      {/* Temporary image until new photos are taken */}
      <img
        src="../../public/images/me-img-orangePentaV3.png"
        alt="Austin Ridgway"
        className="max-h-[450px] w-auto relative"
      />
    </div>
  );
};

export default HeroImg;
