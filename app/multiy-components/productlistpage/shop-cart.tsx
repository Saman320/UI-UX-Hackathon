import React from "react";
import Image from "next/image";

export interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags?: string[];
  dicountPercentage?: number;
  isNew?: boolean; 
}

export default function JustForYou({
  title,
  description,
  imageUrl,
  price,
  dicountPercentage,
  isNew
}: Product) {
  return (
    <div className="w-full max-w-sm flex flex-col items-center justify-center bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200">
      {/* Product Image */}
      <div className="relative w-full h-60">
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
        {/* Status Circle */}
        <div
          className={`absolute top-4 right-4 w-8 text-[12px] h-8 flex items-center justify-center rounded-full text-white ${isNew
              ? "bg-green-500"
              : dicountPercentage
                ? "bg-red-500"
                : "bg-yellow-500"
            }`}
        >
          {isNew ? (
            <span>New</span>
          ) : (
            <span>{dicountPercentage}%</span>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-2 justify-center items-center m-0 py-4 px-4">
        {/* Product Title */}
        <h3 className="text-lg font-serif font-semibold text-gray-800 ">{title}</h3>

        {/* Product Description */}
        <p className="text-md text-gray-600">
          {description?.substring(0, 100) + "..."}
        </p>
        <div className="flex items-center gap-5">
          {price && dicountPercentage ? (
            <>
              {/* Original price with strikethrough */}
              <p className="text-lg text-gray-400 line-through">
                ${price.toFixed(2)}
              </p>

              {/* Discounted price */}
              <p className="text-lg text-red-500">
                ${((price * (100 - dicountPercentage)) / 100).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-lg text-green-800">
              ${price?.toFixed(2)} {/* Show original price if no discount */}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}