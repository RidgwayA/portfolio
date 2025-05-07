import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import ExperienceAll from "./ExperienceAll";

function ExperienceMain() {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-6 sm:px-4 w-full">
      <ExperienceText />
      <ExperienceTop />
      <br></br>
      <div className="w-full h-1 bg-white lg:block sm:hidden"></div>
      <br></br>
      <ExperienceAll />
    </div>
  );
}

export default ExperienceMain;
