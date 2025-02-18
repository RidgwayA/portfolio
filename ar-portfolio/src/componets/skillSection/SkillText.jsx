import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

function SkillText() {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-center mt-[100px]"
    >
      <h2 className="text-6xl text-cyan mb-10">My Skills</h2>
      <p className="text-2xl text-center text-white">
        As an entry-level developer with a strong foundation in Java, Python,
        React, and Spring Boot, I am passionate about building efficient and
        user-friendly applications. My background in business and banking,
        combined with my software development degree, gives me a unique
        perspective in problem-solving, team collaboration, and delivering
        solutions that meet both technical and business needs. I am eager to
        apply my skills in web development, database management, and cloud
        computing while continuously learning and growing as a developer.
      </p>
    </motion.div>
  );
}

export default SkillText;
