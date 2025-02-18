import React from "react";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const experiences = [
  {
    job: "Manager In Training",
    company: "Hibbett Sports",
    date: "2012 - 2014",
    responsibilities: [
      "Enhanced supervisory and leadership abilities by working closely with supervisor.",
      "Improved staffing during busy periods by creating employee schedules and monitoring call-outs.",
      "Created and utilized company reports to analyze sales, gross profit, and inventory activities.",
    ],
  },
  {
    job: "US Bank",
    company: "Personal Banker",
    date: "2013 - 2018",
    responsibilities: [
      "Answered customer questions and explained available services such as deposit accounts, loans, and securities.",
      "Promoted financial products by maintaining excellent service knowledge.",
      "Worked closely with management to strategize sales techniques.",
      "Analyzed customers' financial information to deliver personalized guidance.",
    ],
  },
  {
    job: "Arvest Bank",
    company: "Commercial Loan Assistant",
    date: "2018 - 2019",
    responsibilities: [
      "Managed and processed a custom loan application queue.",
      "Built productive relationships with clients and realtors.",
      "Supported loan officers with documentation.",
      "Communicated with customers to complete paperwork.",
    ],
  },
  {
    job: "Managing Owner",
    company: "Ridgway Rental Management",
    date: "2019 - Present",
    responsibilities: [
      "Maintained leases and renewal documents.",
      "Verified income, assets, and expenses.",
      "Monitored timely receipt and reconciliation of rent collections.",
    ],
  },
];

const ExperienceAll = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 w-full pb-[50px]">
      {experiences.map((experience, index) => (
        <motion.div
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
