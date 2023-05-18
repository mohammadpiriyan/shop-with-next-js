import React from "react";

const Footer = () => {
  return (
    <div className="h-64 bg-[#262624] flex flex-col justify-center items-center">
      <div className="flex gap-3 p-4">
        <button className="text-[#898f87] hover:text-[#bbbbbb]">Home</button>
        <button className="text-[#898f87] hover:text-[#bbbbbb]">About</button>
        <button className="text-[#898f87] hover:text-[#bbbbbb]">
          Products
        </button>
        <button className="text-[#898f87] hover:text-[#bbbbbb]">Posts</button>
      </div>
      <div>
        <p className="text-[#898f87]">
          © 2023 WebStylePress-All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
