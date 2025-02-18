import React from "react";

const MyInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="" />
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default MyInfo;
