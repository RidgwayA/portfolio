import React from "react";
import { RiPentagonLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const HeroImg = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="relative h-full flex items-center justify-center overflow-hidden"
    >
      {/* Pentagon Positioned Behind Image Without Affecting Layout */}
      <div className="absolute inset-0 flex justify-center items-center -z-10 pointer-events-none">
        <RiPentagonLine className="h-[500px] w-[500px] text-cyan animate-[spin_20s_linear_infinite] blur-lg opacity-50" />
      </div>
      <img
        src="/images/me.png"
        alt="Austin Ridgway"
        className="max-h-[450px] w-auto relative"
      />
    </motion.div>
  );
};

export default HeroImg;
