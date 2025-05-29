import { MdOutlineEmail } from "react-icons/md";
// import { FiPhone } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import MyInfo from "./MyInfo";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 text-white">
      <MyInfo text="ridgway.austink@gmail.com" Image={MdOutlineEmail} />
      {/* <MyInfo text="660-851-1230" Image={FiPhone} /> */}
      <MyInfo text="Boise, Idaho" Image={FaMapLocationDot} />
    </div>
  );
}

export default ContactInfo;
