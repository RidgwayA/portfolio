import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

function AboutMeText() {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-6xl text-cyan mb-10"
      >
        About Me
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-white text-2xl"
      >
        With a background in both business and software development, I bring a
        unique blend of analytical thinking, technical expertise, and
        customer-focused solutions. My career started in banking, where I
        developed strong financial and problem-solving skills before
        transitioning into software engineering—a passion that drives me to
        create efficient and user-friendly solutions. Over the past five years,
        my wife and I have embarked on an incredible journey, traveling across
        the country as she worked as a travel CT tech, moving 10+ times with our
        two dogs, Nala and Max. While our nomadic lifestyle has been an
        adventure, we are now looking to settle down and build a more permanent
        foundation. With experience in banking, rental property management,
        software development, and IT infrastructure, I am eager to apply my
        skills in a role that allows me to create meaningful and innovative
        technology solutions.
      </motion.p>
      <motion.a
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        href="#projects"
      >
        <button className="px-4 py-2 mt-3 rounded-full text-xl font-bold text-black border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-myshadow">
          My Projects
        </button>
      </motion.a>
    </div>
  );
}

export default AboutMeText;
