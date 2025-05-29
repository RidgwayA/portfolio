import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const projects = [
  {
    name: "Easy Workout Planner",
    type: "Android App",
    status: "Completed",
    alignment: "right",
    description: "WGU Capstone project",
    image: "/images/dumbbell.png",
    gitLink: "https://github.com/RidgwayA/easy-workout-planner",
    liveLink:"https://aridgw1.itch.io/easy-workout-planner",
  },
  {
    name: "Bakery Website",
    type: "Website",
    status: "Work in progress",
    alignment: "left",
    description: "Client website",
    image: "/images/muffin.png",
    gitLink: "https://github.com/RidgwayA/ac-boutique",
    liveLink:"https://ac-botique.vercel.app/",
  },
  {
    name: "Vacation Planning App",
    type: "Android App",
    status: "Completed",
    alignment: "right",
    description: "WGU Android project",
    image: "/images/plane.png",
    gitLink: "https://github.com/RidgwayA/Ridgway-Vacation-Planner-D308",
    liveLink:"#",
  },
  //   {
  //     name: "Test",
  //     type: "Website",
  //     status: "Work in progress",
  //     alignment: "left",
  //     description: "Client website",
  //     image: "#",
  //     link: "#"
  //   }
];

function AllProjects() {
  return (
    <div className="flex flex-col gap-12 w-full">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={fadeIn(
            project.alignment === "left" ? "right" : "left",
            index * 0.15
          )}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            project.alignment === "right"
              ? "md:flex-row-reverse"
              : "md:flex-row"
          }`}
        >
          <SingleProject project={project} />
        </motion.div>
      ))}
    </div>
  );
}

export default AllProjects;
