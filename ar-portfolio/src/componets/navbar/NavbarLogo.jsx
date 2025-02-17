import React from 'react';

function NavbarLogo() {
  return (
    <div>
      <a href="#hero" className="cursor-pointer">
        <h1 className="text-white font-fancy text-5xl sm:hidden md:block">
          Austin Ridgway
        </h1>
        <h1 className="text-white font-fancy font-extrabold text-4xl sm:block md:hidden">
          AR
        </h1>
      </a>
    </div>
  );
}

export default NavbarLogo;
