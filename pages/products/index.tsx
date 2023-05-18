import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "./../../layout/Navbar";
import Card from "@/components/Card";
import axios from "axios";
import { GetServerSideProps } from "next";
import { Product } from "@/interfaces";
import Footer from "@/layout/Footer";

type Props = {
  productArray: Product[];
};

function Products({ productArray }: Props) {
  // useEffect(() => {
  //   async () => {
  //     const res = await axios.get("/api/products");
  //     setProductArray(res.data);
  //   };
  // }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="p-16 bg-[#d9d9d7] flex  justify-between items-center">
        <h1 className="font-bold text-3xl text-gray-900">PRODUCTS</h1>
        <div>
          <span>Home</span> / <span className="text-gray-500">Products</span>
        </div>
      </div>
      <div className="flex gap-8 flex-wrap justify-center py-4">
        {productArray.map((item) => {
          // console.log(item);
          return <Card item={item} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/products");
    return { props: { productArray: res.data } };
  } catch (error) {
    console.log(error);
    return { props: { productArray: [] } };
  }
};

export default Products;
{
  /* <h1>Products</h1>
        <Link href="/products/1">go to single product</Link> */
}
