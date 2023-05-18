import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import React from "react";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="p-16 bg-[#d9d9d7] flex  justify-between items-center">
        <h1 className="font-bold text-3xl text-gray-900">ABOUT</h1>
        <div>
          <span>Home</span> / <span className="text-gray-500">About</span>
        </div>
      </div>
      <div className="p-16 flex gap-8 justify-center">
        <div className="w-[30%] flex flex-col gap-2">
          <h1 className="font-bold text-xl text-gray-800">WHY CHOOSE US.</h1>
          <div className="w-12 h-[1px] bg-gray-800"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            numquam quo ex eligendi rerum, accusantium consectetur vero
            quibusdam, ipsa dicta inventore, tempora ullam illum voluptatem
            veritatis? Optio eaque enim repudiandae. Possimus non quos, id
            similique enim quidem eveniet ipsam blanditiis error omnis
            praesentium sapiente modi quisquam voluptatum! Harum nisi mollitia,
            assumenda modi, neque iure officiis magni facere, minus dolores ut.
          </p>
        </div>
        <div className="w-[30%] flex flex-col gap-2">
          <h1 className="font-bold text-xl text-gray-800">WHY CHOOSE US.</h1>
          <div className="w-12 h-[1px] bg-gray-800"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            numquam quo ex eligendi rerum, accusantium consectetur vero
            quibusdam, ipsa dicta inventore, tempora ullam illum voluptatem
            veritatis? Optio eaque enim repudiandae. Possimus non quos, id
            similique enim quidem eveniet ipsam blanditiis error omnis
            praesentium sapiente modi quisquam voluptatum! Harum nisi mollitia,
            assumenda modi, neque iure officiis magni facere, minus dolores ut.
          </p>
        </div>
        <div className="w-[30%] flex flex-col gap-2">
          <h1 className="font-bold text-xl text-gray-800">WHY CHOOSE US.</h1>
          <div className="w-12 h-[1px] bg-gray-800"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            numquam quo ex eligendi rerum, accusantium consectetur vero
            quibusdam, ipsa dicta inventore, tempora ullam illum voluptatem
            veritatis? Optio eaque enim repudiandae. Possimus non quos, id
            similique enim quidem eveniet ipsam blanditiis error omnis
            praesentium sapiente modi quisquam voluptatum! Harum nisi mollitia,
            assumenda modi, neque iure officiis magni facere, minus dolores ut.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
