import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

function ExperienceTopLeft() {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="h-[500px] w-[300px] relative"
    >
      <div className="h-[500px] w-[300px] rounded-[100px] rounded-tr-[20px] rounded-bl-[0px] absolute overflow-hidden">
        <img
          src="/images/experienceLightbulb.jpg"
          alt="About me img"
          className="h-full w-auto object-cover"
        ></img>
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[75px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </motion.div>
  );
}

export default ExperienceTopLeft;
