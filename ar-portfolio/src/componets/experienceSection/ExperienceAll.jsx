
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const experiences = [
  {
    job: "Manager In Training",
    company: "Hibbett Sports",
    date: "2012 - 2014",
    responsibilities: [
      "Trained and onboarded new employees on company software while managing cash-handling procedures and ensuring secure, compliant payment processing.",
      "Improved staffing during busy periods by creating employee schedules and monitoring call-outs.",
      "Created and utilized company reports to analyze sales, gross profit, and inventory activities.",
    ],
  },
  {
    job: "Personal Banker",
    company: "US Bank",
    date: "2013 - 2018",
    responsibilities: [
      "Provided financial guidance to clients by leveraging data driven insights from banking software to recommend suitable products and services while developing strong customer relations through CRM platforms to track interactions.",
      "Educated and assisted customers with setting up and troubleshooting online banking applications, mobile banking, and digital payment systems. Compiled common support questions into internal FAQs to reduce repeat inquiries.",
    ],
  },
  {
    job: "Commercial Loan Assistant",
    company: "Arvest Bank",
    date: "2018 - 2019",
    responsibilities: [
      "Created and maintained closing-package checklists, ensuring 100% compliance with lending regulations.",
      "Mapped title/escrow workflows and coordinated with loan officers, underwriters, and title partners to eliminate process bottlenecks and delays.",
      "Coordinated communication among loan officers, underwriters, and clients using collaborative workflow platforms to enhance efficiency and transparency in the lending process.",
    ],
  },
  {
    job: "Property Manager",
    company: "Ridgway Rental Management",
    date: "2019 - Present",
    responsibilities: [
      "Managed day-to-day operations including tenant communication, rent collection, and vendor scheduling.",
      "Coordinated property maintenance with local contractors, tracking tasks to completion.",
      "Maintained financial records using accounting software; processed payments and deposits.",
      "Created internal documentation and checklists to streamline recurring processes.",
    ],
  },
];

const ExperienceAll = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 w-full pb-[50px]">
      {experiences.map((experience, index) => (
        <motion.div
        key={index}
          variants={fadeIn("down", index * 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center rounded-lg overflow-hidden break-words text-left"
        >
          <SingleExperience experience={experience} />
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceAll;
