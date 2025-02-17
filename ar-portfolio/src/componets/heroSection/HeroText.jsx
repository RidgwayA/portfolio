import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroText = () => {
  const renderTypewriter = () => (
    <span className="relative inline-block w-full max-w-[300px] h-[50px] overflow-hidden">
      <span className="absolute left-0 top-0 w-full text-cyan whitespace-nowrap">
        <Typewriter
          words={["Frontend Developer.", "Backend Developer.", "Android Developer."]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </span>
  );

  return (
    <div className="flex flex-col pr-[20px] gap-4 h-full justify-center md:text-left sm:text-center px-4 p-5 min-h-[200px] relative overflow-hidden">
      <h1 className="lg:text-4xl sm:text-xl text-white break-words">
        Hello, my name is{" "}
        <span className="text-cyan underline decoration-1">Austin Ridgway</span> and I am a <br />{" "}
        {renderTypewriter()}
      </h1>
    </div>
  );
};

export default HeroText;
