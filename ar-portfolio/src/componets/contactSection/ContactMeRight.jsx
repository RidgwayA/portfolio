import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

function ContactMeRight() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 ">
      <img
        src="/images/communicate.png"
        alt="Contact Me"
        className="max-w-[225px] hidden lg:block"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
}

export default ContactMeRight;
