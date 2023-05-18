import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/products/2");
    })();
  });
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className=" p-16 bg-[#d9d9d7] flex  justify-between items-center ">
        <h1 className="font-bold text-3xl text-gray-900">
          WELCOME TO WEBSTYLEPRESS
        </h1>
      </div>
      <div className="p-16">
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum
          quae deleniti corrupti, ea laborum similique neque optio natus quaerat
          ipsum culpa sequi eum laudantium facilis ratione blanditiis
          asperiores. Aspernatur! Molestiae, odit! Accusamus commodi, porro
          fugiat quis quisquam illum maxime voluptatibus libero ducimus aliquid
          incidunt consequatur, soluta voluptas dolores, aspernatur eos dolor!
          Aliquam doloremque laborum fugiat nesciunt voluptate in porro! Quo
          corrupti neque dicta fugit facere! Tempora nam voluptatem voluptate
          corporis, magnam, modi itaque dolor praesentium totam culpa est illum
          porro omnis necessitatibus, minus laboriosam ratione vel quos
          repudiandae beatae. Ut ad, sed hic atque debitis veniam earum illum?
          Neque, odio animi quasi explicabo et quis nobis sequi nam facilis quas
          veniam non. Nulla, aliquam. A quo unde earum nostrum! Nam praesentium
          ab nisi sint, voluptas nihil? Placeat quam expedita, dicta suscipit
          voluptates quo nostrum blanditiis repudiandae iste! Culpa doloremque
          laborum velit consequuntur.
          <br /> hic voluptas tenetur molestiae non officiis assumenda. Maiores
          consequatur inventore animi minima at odit, consectetur, sit quis
          neque quod architecto alias, nam tempore voluptate odio. Inventore
          facilis maiores, magnam nihil id libero magni aut aliquam nostrum
          beatae? Dolore officia error ex eos asperiores a quasi, nobis aut
          eligendi ea eum nostrum vel, ab mollitia. Hic neque nobis velit
          ducimus natus ullam, officia quis, explicabo ea cumque omnis. Debitis
          nulla quos enim possimus, eligendi beatae velit in, neque ea quas
          maxime! Expedita, pariatur! Sunt laudantium, odio adipisci debitis
          fugit cupiditate ipsam blanditiis asperiores provident expedita in,
          quia iure! Vel voluptatum nulla nam totam deserunt exercitationem
          quaerat dolore illo, fuga corrupti, quasi ducimus iste cupiditate
          repudiandae laudantium quos architecto eius tempora pariatur magni.
          Dignissimos aspernatur culpa incidunt numquam fugit? Esse debitis
          nostrum, odit repudiandae reiciendis aspernatur, a fugiat rerum facere
          dolorum quasi? Debitis, illum ea. Quam porro deleniti fuga autem
          labore odit neque quos velit. Maiores quasi numquam unde.
        </p>
      </div>
      <Footer />
    </div>
  );
}

// export const getServerSideProps = () => {
//   // ...
//   process.env.NODE_ENV === "developement" ?
//   "http://localhost:port/api/endpoint" :
//   "felan.vercel.com"
// }
