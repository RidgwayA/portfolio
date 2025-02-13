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
import SkillSingle from "./SkillSingle";

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

function SkillMulti() {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return <SkillSingle key={index} text={item.skill} imgSvg={item.icon}/>
        })}
      </div>
    </div>
  );
}

export default SkillMulti;
