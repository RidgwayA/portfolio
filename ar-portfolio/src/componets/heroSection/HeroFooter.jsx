import React, { useState, useEffect } from "react";

const items = ["Quick Learner", "Team Player", "Detail Oriented"];

function HeroFooter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("large");
    // TODO Might need to update for mobile screens.
    // Detect screen size and update state correctly
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("small");
      } else if (width >= 768 && width < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    updateScreenSize(); 
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Cycle through items every 3 seconds for small & medium screens
  useEffect(() => {
    if (screenSize === "large") return; // No cycling on large screens
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [screenSize]);

  return (
    <div className="w-full border-y bg-black/80 border-white text-white uppercase py-8 flex items-center text-center px-4">
      {/* Large Screens: Show all three items */}
      {screenSize === "large" && (
        <div className="w-full flex justify-between">
          <p className="text-2xl lg:text-4xl tracking-wide w-1/3">{items[0]}</p>
          <p className="text-2xl lg:text-4xl tracking-wide w-1/3">{items[1]}</p>
          <p className="text-2xl lg:text-4xl tracking-wide w-1/3">{items[2]}</p>
        </div>
      )}

      {/* Medium Screens: Show 2 cycling items */}
      {screenSize === "medium" && (
        <div className="w-full flex justify-between">
          <p className="text-2xl lg:text-4xl tracking-wide w-1/2">{items[currentIndex]}</p>
          <p className="text-2xl lg:text-4xl tracking-wide w-1/2">{items[(currentIndex + 1) % items.length]}</p>
        </div>
      )}

      {/* Small Screens: Show 1 cycling item */}
      {screenSize === "small" && (
        <p className="animate-fade text-2xl lg:text-4xl tracking-wide w-full text-center">
          {items[currentIndex]}
        </p>
      )}
    </div>
  );
}

export default HeroFooter;
