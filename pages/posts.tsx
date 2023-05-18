import Navbar from "@/layout/Navbar";
import React from "react";

const Posts = () => {
  return (
    <div>
      <Navbar />
      <div className="p-16 bg-[#d9d9d7] flex  justify-between items-center">
        <h1 className="font-bold text-3xl text-gray-900">PRODUCTS</h1>
        <div>
          <span>Home</span> / <span className="text-gray-500">Posts</span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
