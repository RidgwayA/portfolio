import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

function ProjectsText() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 w-full ">
      <div className="flex flex-col w-full max-w-[600px] px-4 sm:px-2">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-6xl text-cyan text-center mb-6"
        >
          Projects
        </motion.h2>
        <motion.h3
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-orange font-bold uppercase text-3xl font-body text-center mb-4"
        >
          Since 2022
        </motion.h3>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center"
        >
          <p className="text-cyan text-2xl md:text-3xl font-semibold">
            3 Years
          </p>
          <p className="text-cyan text-2xl md:text-3xl font-semibold">
            10+ Projects
          </p>
          <p className="text-white text-xl md:text-2xl leading-relaxed p-[50px]">
            With 3 years of hands-on experience during my software development
            studies, I&apos;ve completed 10+ projects, including building 2 Android
            apps, developing 5+ websites with database interactions, creating a
            SQL database, and deploying projects using Docker. A few of these
            are displayed below.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectsText;
