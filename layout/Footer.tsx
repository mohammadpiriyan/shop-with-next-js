import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-64 bg-[#262624] flex flex-col justify-center items-center">
      <div className="flex gap-3 p-4">
        <Link href="/">
          <button className="text-[#898f87] hover:text-[#bbbbbb]">Home</button>
        </Link>

        <Link href="/about">
          <button className="text-[#898f87] hover:text-[#bbbbbb]">About</button>
        </Link>

        <Link href="/products">
          <button className="text-[#898f87] hover:text-[#bbbbbb]">
            Products
          </button>
        </Link>

        <Link href="/posts">
          <button className="text-[#898f87] hover:text-[#bbbbbb]">Posts</button>
        </Link>
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
