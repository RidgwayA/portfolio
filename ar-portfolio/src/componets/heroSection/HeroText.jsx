import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const HeroText = () => {
  const renderTypewriter = () => (
    <span className="relative inline-block w-full max-w-[400px] h-auto overflow-visible">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="absolute left-0 top-0 w-full text-cyan whitespace-nowrap"
      >
        <Typewriter
          words={[
            "Frontend Developer.",
            "Backend Developer.",
            "Android Developer.",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.div>
    </span>
  );

  return (
    <div className="flex flex-col pr-[20px] gap-4 h-full justify-center md:text-left sm:text-center px-4 p-5 min-h-[200px] relative overflow-hidden">
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="lg:text-4xl sm:text-xl text-white break-words"
      >
        Hello, my name is{" "}
        <span className="text-cyan underline decoration-1">Austin Ridgway</span>{" "}
        and I am a <br /> {renderTypewriter()}
      </motion.h1>
    </div>
  );
};

export default HeroText;
