import { useState, useEffect } from "react";

const items = [
  "Quick Learner",
  "Team Player",
  "Detail Oriented",
  "Hard Worker",
  "Creative",
  "Problem Solver",
];

function SectionFooter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("large");

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-y bg-black/80 border-white text-white uppercase py-8 flex items-center text-center px-4">
      {screenSize === "large" && (
        <div className="w-full flex justify-between">
          <p className="text-2xl lg:text-4xl tracking-wide w-1/3">
            {items[currentIndex]}
          </p>
          <p className="text-2xl lg:text-4xl tracking-wide w-1/3">
            {items[(currentIndex + 1) % items.length]}
          </p>
          <p className="text-2xl lg:text-4xl tracking-wide w-1/3">
            {items[(currentIndex + 2) % items.length]}
          </p>
        </div>
      )}
      {screenSize === "medium" && (
        <div className="w-full flex justify-between">
          <p className="text-2xl lg:text-4xl tracking-wide w-1/2">
            {items[currentIndex]}
          </p>
          <p className="text-2xl lg:text-4xl tracking-wide w-1/2">
            {items[(currentIndex + 1) % items.length]}
          </p>
        </div>
      )}
      {screenSize === "small" && (
        <p className="animate-fade text-2xl lg:text-4xl tracking-wide w-full text-center">
          {items[currentIndex]}
        </p>
      )}
    </div>
  );
}

export default SectionFooter;
