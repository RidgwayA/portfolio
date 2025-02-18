import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

function ExperienceText() {
  return (
    <motion.div
      variants={fadeIn("", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-center mt-[125px]"
    >
      <h2 className="text-6xl text-cyan mb-10 ">Experience</h2>
    </motion.div>
  );
}

export default ExperienceText;
