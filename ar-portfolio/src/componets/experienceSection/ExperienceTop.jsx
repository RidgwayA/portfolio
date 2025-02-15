import React from 'react'
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopRight from "./ExperienceTopRight";

function ExperienceTop() {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-30 items-center justify-center mb-20">
      <ExperienceTopLeft/>
      <ExperienceTopRight/>
    </div>
  )
}

export default ExperienceTop
