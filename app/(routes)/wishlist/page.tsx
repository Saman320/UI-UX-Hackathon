"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { removeFromWishlist } from "@/app/store/features/wishlistSlice";
import Image from "next/image";
import Header from "@/app/multiy-components/headers/header";
import { IoIosArrowDropright } from "react-icons/io"; // Right Arrow Icon
import Link from "next/link";
import { MdDelete } from "react-icons/md";

export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const handleRemove = (id: string) => {
    dispatch(removeFromWishlist(id));

  };

  return (
    <main className="p-6">
      <Header />
      {/* h1 and Right Arrow Icon */}
      <div className="flex justify-between items-center gap-2 mb-4">
        <h1 className="text-2xl font-serif font-bold">Wishlist Items</h1>
        {/* Right Arrow Icon (Link to Product Detail Page) */}
        
        {wishlist.length > 0 && (
          <div className="flex items-center gap-2">
            <p className="text-xl font-serif">Product Details</p>
            <Link href={`/products/${wishlist[0]._id}`}>
              <IoIosArrowDropright size={24} className="text-[#23A6F0] cursor-pointer hover:text-blue-600" />
            </Link>
          </div>
        )}
      </div>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlist.map((item) => (
          <div key={item._id} className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={100}
              height={100}
              className="w-24 h-24 object-cover rounded-lg"
            />
            {/* Product Details */}
            <div className="text-center mt-4">
              <h2 className="font-semibold font-serif text-xl">{item.title}</h2>
              <p className="font-semibold font-serif text-lg text-gray-600">${item.price}</p>
            </div>
            {/* Remove Button */}
            <button
              onClick={() => handleRemove(item._id)}
              className="mt-4 text-red-500 flex items-center gap-1 hover:text-red-700 transition-colors duration-300"
            >
              <p>Remove</p>
              <MdDelete size={20} />
            </button>
          </div>
        ))}
      </div>
      )}
    </main>
  );
}