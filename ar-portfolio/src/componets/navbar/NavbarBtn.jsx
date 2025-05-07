
import { GoArrowDownRight } from "react-icons/go";
import { track } from "@vercel/analytics";

function NavbarBtn() {
  const handleDownload = () => {
    track("resume_download", { page: "Navbar" });
    const link = document.createElement("a");
    link.href = "/images/Austin-Ridgway-Resume.pdf";
    link.download = "Austin-Ridgway-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 rounded-full text-xl font-bold text-black border-cyan border flex items-center gap-1 
      bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-myshadow"
    >
      Resume
      <GoArrowDownRight />
    </button>
  );
}

export default NavbarBtn;
