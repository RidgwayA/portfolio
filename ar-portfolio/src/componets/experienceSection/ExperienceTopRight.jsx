import React from "react";
import ExperienceInfo from "./ExperienceInfo";


function ExperienceTopRight() {
  return (
    <div className="flex flex-col gap-6 w-[600px]">
      <p className="text-orange font-bold uppercase text-3xl font-body text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-orange">-</p>
        <ExperienceInfo number="10+" text="Projects" />
      </div>
      <p className="text-center text-white text-3xl">
        With 3 years of hands-on experience during my software development
        studies, I've completed 10+ projects, including building 2 Android apps,
        developing 5+ websites with database interactions, creating a SQL
        databases, and deploying projects using Docker.
      </p>
    </div>
  );
}

export default ExperienceTopRight;
