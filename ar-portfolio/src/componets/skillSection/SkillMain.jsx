import React from "react";
import SkillText from "./SkillText";
import SkillMulti from "./SkillMulti";
import SkillMultiSm from "./SkillMultiSm";

function SkillMain() {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <SkillText />
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <SkillMulti />
        </div>
        <div className="sm:block lg:hidden">
          <SkillMultiSm />
        </div>
      </div>
    </div>
  );
}

export default SkillMain;
