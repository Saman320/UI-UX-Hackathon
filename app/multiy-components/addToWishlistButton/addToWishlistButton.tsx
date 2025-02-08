// app/components/AddToWishlistButton.tsx
"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addToWishlist } from "@/app/store/features/wishlistSlice";
import { Product } from "../productlistpage/shop-cart";
import { GoHeart } from "react-icons/go";

export default function AddToWishlistButton({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  return (
    <div
      className="cursor-pointer transform transition-all duration-300 hover:-translate-y-3 hover:text-blue-500"
      onClick={handleAddToWishlist}
    >
      <GoHeart size={25} />
    </div>
  );
}