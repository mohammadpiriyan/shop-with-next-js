import { Product } from "@/interfaces";
import Link from "next/link";
import { type } from "os";
import React from "react";
type Props = {
  item: Product;
};
const Card = ({ item }: Props) => {
  // console.log(item);

  return (
    <div className="2xl:w-[30%] md:w-[40%] sm:w-[45%] w-[70%] text-center flex flex-col gap-2 bg-gray-100 justify-between shadow-xl">
      <img src={item.images[0]} alt="" className="h-64 object-cover" />
      <p>{item.title}</p>
      <p className="px-4">{item.description}</p>
      <div className="flex justify-between p-2 px-4 items-center">
        <p>
          Price: <span className="text-blue-500 font-bold">${item.price}</span>
        </p>

        <Link href={`products/${item.id}`}>
          <button className="p-1 px-3 bg-blue-500 text-white hover:bg-blue-600">
            DETAILS→
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
