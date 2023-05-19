import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  product: string;
}
// console.log(getServerSideProps);

function SingleProduct({ product }: Props) {
  // const router = useRouter();
  // console.log(router);
  console.log(product);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="p-16 bg-[#d9d9d7] flex  justify-between items-center">
        <h1 className="font-bold text-3xl text-gray-900">{product.title}</h1>
        <div>
          <span>Home</span> /
          <span className="text-gray-500">{product.title}</span>
        </div>
      </div>
      <div className="flex gap-8 p-10 px-16">
        <img
          src={product.images[0]}
          alt=""
          className="h-[25rem] w-[30%] object-cover"
        />
        <div className="w-[60%] flex flex-col gap-4">
          <h1 className="font-bold text-3xl">{product.title}</h1>
          <h3 className="font-bold">${product.price}</h3>
          <p className="">{product.description}</p>
          <div className="flex gap-3 mt-4">
            <button className="bg-blue-600 p-1 px-2 text-white hover:bg-blue-500">
              BACK
            </button>
            <button className="bg-blue-600 p-1 px-2 text-white hover:bg-blue-500">
              NAVIGATE TO PRODUCTS
            </button>
            <button className="bg-blue-600 p-1 px-2 text-white hover:bg-blue-500">
              PRODUCTS
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params.id;
  console.log(id);

  try {
    const res = await axios.get(`http://localhost:3000/api/products/${id}`);
    return { props: { product: res.data } };
  } catch (error) {
    console.log(error);
    return { props: { productArray: [] } };
  }
};

export default SingleProduct;
