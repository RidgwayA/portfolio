"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GRID_SIZE = 32;
const NUM_DOTS = 15;
const MIN_GRID_TRAVEL = 5;
const MAX_GRID_TRAVEL = 8;
const DOT_SIZE = 3; // Set dot size to 3px

const generateDots = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const cols = Math.floor(screenWidth / GRID_SIZE);
  const rows = Math.floor(screenHeight / GRID_SIZE);

  return new Array(NUM_DOTS).fill(null).map(() => {
    const col = Math.floor(Math.random() * cols) * GRID_SIZE;
    const row = Math.floor(Math.random() * rows) * GRID_SIZE;

    const gridTravelDistance =
      Math.floor(
        Math.random() * (MAX_GRID_TRAVEL - MIN_GRID_TRAVEL + 1) +
          MIN_GRID_TRAVEL
      ) * GRID_SIZE;

    // Ensure dots don’t move outside viewport height
    const maxTravelDistance = Math.min(
      gridTravelDistance,
      screenHeight - row - GRID_SIZE
    );

    return {
      id: Math.random().toString(36).substr(2, 9),
      size: DOT_SIZE, // Set dot size permanently
      left: col - DOT_SIZE / 2, // Center on grid lines
      top: row - DOT_SIZE / 2, // Center on grid lines
      travelDistance: maxTravelDistance,
      speed: Math.random() * 2.5 + 1,
      delay: Math.random() * 1,
    };
  });
};

const HeroBackground = () => {
  const [dots, setDots] = useState(generateDots());

  useEffect(() => {
    const handleResize = () => {
      setDots(generateDots());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
        backgroundPosition: "0 0", // Align background grid with dots
      }}
    >
      {/* Background Shadow Elements */}
      <div className="shadow-bgShadow absolute top-0 right-[300px] -z-10 animate-pulse"></div>
      <div className="shadow-bgShadow2 absolute top-0 right-[500px] -z-10 animate-pulse"></div>

      {/* Animated Dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ y: "0%", opacity: 0 }}
          animate={{
            y: `${dot.travelDistance}px`,
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: dot.speed,
            repeat: Infinity,
            delay: dot.delay,
            ease: "linear",
          }}
          className="absolute bg-white rounded-full"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            top: `${dot.top}px`,
            left: `${dot.left}px`,
            opacity: 0.3,
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default HeroBackground;
