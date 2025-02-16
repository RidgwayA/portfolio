import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { SiCsswizardry } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { GrDocker } from "react-icons/gr";

const skills = [
  {
    skill: "HTML",
    icon: <TiHtml5 />,
  },
  {
    skill: "CSS",
    icon: <SiCsswizardry />,
  },
  {
    skill: "Java",
    icon: <FaJava />,
  },
  {
    skill: "SpringBoot",
    icon: <BiLogoSpringBoot />,
  },
  {
    skill: "Javascript",
    icon: <SiJavascript />,
  },
  {
    skill: "React",
    icon: <FaReact />,
  },
  {
    skill: "Python",
    icon: <FaPython />,
  },
  {
    skill: "PostgreSQL",
    icon: <BiLogoPostgresql />,
  },
  {
    skill: "Git",
    icon: <FaGitSquare />,
  },
  {
    skill: "Docker",
    icon: <GrDocker />,
  },
];

function SkillMultiSm() {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center ">
            {React.cloneElement(item.icon, { className: "text-7xl text-orange" })}
            <p className="text-center text-orange text-3xl mt-4">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SkillMultiSm;
