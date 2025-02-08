"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { HiBars3BottomRight } from "react-icons/hi2";
import { client } from "@/sanity/lib/client";
import { Product } from "../productlistpage/shop-cart";
import CartIcon from "@/app/localcomponents/cartIcon";
import WishlistIcon from "../wishlistIcon/wishlistIcon";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";



export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDeatai, setDetail] = useState<boolean>(false)
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const query = `*[_type == "product"]{
          _id,
          title,
          description,
          "imageUrl": productImage.asset->url,
           price,
           tags,
           dicountPercentage,
           isNew
       }`;

      // Fetch data from Sanity API
      // const data: Product[] = await client.fetch(query);
      // return data;
      client.fetch(query).then((data) => {
        setProducts(data);
      }).catch((error) => {
        console.error("Error fetching products:", error);
      });

    }
    getProduct();
  }, [])

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Function to handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setDetail(false)

    // Filter products based on search query
    const filtered = products.filter((product) =>
      product?.title?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Function to toggle the search input visibility
  const toggleSearching = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery("");
    setFilteredProducts(products);
  };

  const onDetail = () => {
    setDetail(true)
    setSearchQuery("")
  };

  return (
    <div className="w-full px-4 md:px-6 py-4 bg-white font-sans font-semibold  ">
      <div className="flex justify-between items-center">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center gap-3 md:gap-2 lg:gap-12 ">
          {/* Logo */}
          <h2 className="text-2xl font-bold">Bandage</h2>

          {/* Navigation Links */}
          <nav className="hidden md:flex">
            <ul className="flex gap-x-4 text-md md:text-md lg:text-lg">
              <li>
                <Link href={"/"} className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li className=" ">
                <Link href={"/products"} className="flex items-center gap-1 hover:text-blue-500">
                  Shop
                  <GoChevronDown />
                </Link>
              </li>
              <li>
                <Link href={"/about"} className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:text-blue-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={"/contact"} className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:text-blue-500">
                  Pages
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-x-4">
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-x-4">
            {/* Login */}
            <div className="flex items-center pl-2 gap-x-2 text-[#23A6F0]">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            {/* Icons */}
            <ul className="flex items-center gap-x-2 text-[#23A6F0]">
              <li>
                {/* <SearchComponent /> */}
                {/* Search Icon */}
                <button onClick={toggleSearching} className="text-[24px]">
                  <IoSearchOutline />
                </button>

              </li>

              <li className="">
                <CartIcon />
              </li>
              <li className="">
                <WishlistIcon />
              </li>
            </ul>
          </div>


          {/* Mobile Icons */}
          <div className="flex md:hidden justify-center items-center gap-x-4">
            {/* Search Icon */}
            <button onClick={toggleSearching} className="text-[24px]">
              <IoSearchOutline />
            </button>

            {/* Cart */}
            <li className="">
              <CartIcon />
            </li>

            {/* Toggle Button */}
            <Sheet>
              <SheetTrigger>
                <HiBars3BottomRight size={30} className="text-black" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col justify-center items-center gap-y-6 text-2xl font-sans font-semibold text-[#39393a]">
                      <ul className="flex flex-col items-center gap-8">

                        <li>
                          <Link href={"/"} className="hover:text-blue-500">
                            Home
                          </Link>
                        </li>
                        <li className="flex items-center gap-1">
                          <Link href={"/products"} className="hover:text-blue-500">
                            Shop
                          </Link>
                          <GoChevronDown />
                        </li>
                        <li>
                          <Link href={"/about"} className="hover:text-blue-500">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link href={"/"} className="hover:text-blue-500">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link href={"contact/"} className="hover:text-blue-500">
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link href={"/products"} className="hover:text-blue-500">
                            Pages
                          </Link>
                        </li>
                      </ul>
                      {/* Right Section */}
                      <div className="flex items-center gap-x-4">
                        {/* Desktop Icons */}
                        <div className="flex flex-col items-center gap-6">
                          {/* Login */}
                          <div className="flex flex-col gap-3 items-center text-[#23A6F0]">
                            <IoPersonOutline size={30} />
                            <p>Login / Register</p>
                          </div>

                          {/* Icons */}
                          <ul className="flex items-center gap-x-4 text-[#23A6F0]">
                            <li>
                              {/* Search Icon */}
                              <button onClick={toggleSearching} className="text-[24px]" title="button">
                                <IoSearchOutline />
                              </button>
                            </li>

                            <li className="">
                              <CartIcon />
                            </li>

                            <li className="">
                              <WishlistIcon />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div >

      {/* Search Input (Appears when search icon is clicked) */}
      {isSearchOpen && (
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between lg:justify-around space-y-4 md:space-y-0 md:space-x-8 lg:space-x-16 px-4 py-2">
          {/* Spacer for width adjustment */}
          <div className="hidden md:block md:w-[300px] lg:w-[700px]"></div>

          {/* Input field */}
          <div className="flex justify-center items-center space-y-4 md:space-y-0 space-x-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full md:w-auto p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 outline-none"
            />
          </div>
        </div>
      )}


      {/* Display filtered products (can be a separate component or section) */}
      {searchQuery && !isDeatai && (
        <div className=" mt-4 p-4 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2 ">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product._id} className="border p-4 rounded-md shadow-sm">
                  <Link href={`/products/${product._id}`} onClick={onDetail}>
                    <Image src={product.imageUrl} alt={product.title} width={200} height={200} />
                    <h3 className="font-semibold mt-2">{product.title}</h3>

                    {/* <p>{product.title}</p> */}
                  </Link>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      )}


    </div >
  );
}