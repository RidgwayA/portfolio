import React from "react";

export const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function NavbarLinks({ closeMenu }) {
  return (
    <ul className="flex gap-6 text-white font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => (
        <li key={index} className="group">
          <a
            href={`#${link.section}`}
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            onClick={closeMenu}
          >
            {link.link}
          </a>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
}

export default NavbarLinks;
