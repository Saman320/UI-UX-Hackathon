"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { RootState } from "@/app/store/store";


export default function CartIcon() {
  const cartItem = useSelector((state: RootState) => state.cart.items);

  // Use useEffect to save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  }, [cartItem]);

 

  return (
    <main>
      <div>
        <Link href={"/"}></Link>
      </div>
    <div className="relative">
      {/* Cart Icon (FiShoppingCart) wrapped with Link to navigate to the cart page */}
      <Link href="/cart" >
        <FiShoppingCart size={24} className="text-[#23A6F0] cursor-pointer" />
      </Link>

      {/* Quantity Badge - Always show, even if cart is empty */}
      <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs rounded-full px-1">
        {cartItem.length}
      </span>
    </div>
    </main>
  );
}