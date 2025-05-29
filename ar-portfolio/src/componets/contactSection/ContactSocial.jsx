import SocialInfo from "./SocialInfo";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function ContactSocial() {
  return (
    <div className="flex gap-4">
      <SocialInfo link="https://www.linkedin.com/in/austin-ridgway-969b94163/" Icon={FaLinkedin} />
      <SocialInfo link="https://github.com/RidgwayA" Icon={FaGithub} />
    </div>
  );
}

export default ContactSocial;
