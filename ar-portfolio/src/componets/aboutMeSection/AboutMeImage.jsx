import React from "react";

function AboutMeImage() {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
        //Remove and put actual image of me after new photos are taken
          src="/images/about-me.jpg"
          alt="About me img"
          className="h-full w-auto object-cover"
        ></img>
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
}

export default AboutMeImage;
