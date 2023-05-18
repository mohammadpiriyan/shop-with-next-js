import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-screen bg-black text-gray-300 justify-between p-8 px-24 items-center">
      <div>
        <Link href="/">
          <p className="font-bold">Mamad Shop</p>
        </Link>
      </div>
      <div className="flex gap-1">
        <Link href="/">
          <button
            className={`hover:text-white transition font-bold focus:bg-blue-500 focus:text-white p-2 px-4 rounded`}
          >
            Home
          </button>
        </Link>
        <Link href="/about">
          <button className="hover:text-white transition font-bold focus:bg-blue-500 focus:text-white p-2 px-4 rounded">
            About
          </button>
        </Link>

        <Link href="/products">
          <button className="hover:text-white transition font-bold focus:bg-blue-500 focus:text-white p-2 px-4 rounded">
            Products
          </button>
        </Link>
        <Link href="/posts">
          <button className="hover:text-white transition font-bold focus:bg-blue-500 focus:text-white p-2 px-4 rounded">
            Posts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
