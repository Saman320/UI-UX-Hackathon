"use client";

import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { setCart, incrementQuantity, decrementQuantity, removeFromCart } from "@/app/store/features/cart";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Header from "@/app/multiy-components/headers/header";
import { IoIosArrowDropright } from "react-icons/io"; // Right Arrow Icon
import Link from "next/link";
import { NextRequest, NextResponse } from "next/server";
import { Shipengine } from "@/app/lib/helper/shipEngine";


export async function POST(req: NextRequest) {
  try {
    const { rateId } = await req.json();
    const label = await Shipengine.createLabelFromRate({ rateId });
    return NextResponse.json(label, { status: 200 });
  } catch (error ) {
    console.log(error)
    return NextResponse.json(
      { error: "An error occurred while creating the label" },
      { status: 500 }
    );
  }
}


export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  // 🔹 Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        dispatch(setCart(JSON.parse(savedCart))); // Redux state ko update karna
      }
    }
  }, [dispatch]);


  // 🔹 Update localStorage whenever cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart"); 
    }
  }, [cart]);

  // 🔺 Handle increment, decrement, and remove actions
  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  return (
    <main className="p-6">
      <Header />
      {/* h1 and Right Arrow Icon */}
      <div className="flex justify-between  items-center gap-2 mb-4">
        <h1 className="text-2xl font-serif font-bold">Cart Items</h1>
        {/* Right Arrow Icon (Link to Product Detail Page) */}
        {cart.length > 0 && (
          <div className="flex items-center gap-2">
            <p className="text-xl font-serif">Product Details</p>
          <Link href={`/products/${cart[0]._id}`}>
            <IoIosArrowDropright size={24} className="text-[#23A6F0] cursor-pointer hover:text-blue-600" />
          </Link>
          </div>
        )}
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item._id} className="flex items-center justify-around py-4 border-b">
              {/* Product Image */}
              <Image src={item.imageUrl} alt={item.title} width={50} height={50} className="w-20 h-20 object-cover" />

              {/* Product Details */}
              <div className="space-y-3 pl-5">
                <h2 className="font-semibold font-serif text-2xl">{item.title}</h2>
                <p className="font-semibold font-serif text-2xl">${item.price}</p>
                <div className="flex items-center gap-2 text-lg">
                  <button onClick={() => handleDecrement(item._id)} className="px-2 bg-gray-200">-</button>
                  <p>{item.quantity || 1}</p>
                  <button onClick={() => handleIncrement(item._id)} className="px-2 bg-gray-200">+</button>
                </div>
              </div>

              {/* Remove Button */}
              <button onClick={() => handleRemove(item._id)} className="text-red-500 flex items-center gap-1">
                <p>Remove</p>
                <MdDelete size={20} />
              </button>
            </div>
          ))}

          {/* Order Summary */}
          <div className="flex flex-col justify-center items-center">
            <div className="mt-6 text-center w-[300px] bg-[#FAFAFA]">
              <h3 className="text-3xl font-bold font-mono border border-b-8 border-[#5c5c5c] space-y-4">
                Order Summary
              </h3>
              <h2 className="flex border border-opacity-10 border-[#5c5c5c] bg-[#FAFAFA] items-center py-2 px-4 text-2xl font-light font-mono gap-20">
                Total: <p>${calculateTotal()}</p>
              </h2>
            </div>
            <Link href={"/checkout"}>
            <Button className="bg-blue-500 px-[108px] py-5 text-white hover:text-black text-lg border hover:border-blue-500">
              Check Out
            </Button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}