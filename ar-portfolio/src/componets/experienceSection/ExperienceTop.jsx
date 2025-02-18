import React from "react";
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopRight from "./ExperienceTopRight";

function ExperienceTop() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center mb-20 w-full">
      <ExperienceTopLeft />
      <ExperienceTopRight />
    </div>
  );
}

export default ExperienceTop;
