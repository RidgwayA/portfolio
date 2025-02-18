import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";

function AboutMeMain() {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 pb-10 max-w-[1200px] mx-auto mt-[120px] justify-between items-center mb-[120px]"
    >
      <div>
        <AboutMeText />
      </div>
      <div>
        <AboutMeImage />
      </div>
    </div>
  );
}

export default AboutMeMain;
