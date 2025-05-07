import { links } from "../navbar/links";  

function FinalFooter() {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="bg-black/80 py-4 text-white text-center">
        <p className="text-lg font-bold mb-2">Austin Ridgway</p>

        {/* Dynamically Render Navbar Links */}
        <ul className="flex justify-center gap-6">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.section}`}
                className="text-white hover:text-cyan transition-all duration-300"
              >
                {link.link}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-4">Copyright © 2025 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default FinalFooter;
