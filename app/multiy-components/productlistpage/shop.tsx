import React, { Key } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";
import { Button } from "@/app/components/ui/button";
import JustForYou, { Product } from "./shop-cart";
import Green_Header from "../headers/green-header";
import Header from "../headers/header";
import { client } from "@/sanity/lib/client";
import Link from "next/link";


const getProduct = async () => {
  const query = `*[_type == "product"][1...13] {
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
  const data: Product[] = await client.fetch(query);
  return data;

};


async function Shop() {
  const data = await getProduct();
  console.log(data)
  return (
    <main>

      <Green_Header />
      <Header />
      <div className="bg-[#FAFAFA] space-y-4 font-sans font-semibold">
        {/* section one */}
        <div className="flex justify-between items-center md:px-9">
          <div className="my-8 mx-6 md:flex">

            <h1 className="font-bold text-lg">SHOP</h1>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row md:p-7 ">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Shop</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        {/* section two */}
        <div className="flex justify-center items-center flex-col py-6">
          <div className="grid grid-cols md:grid-cols-5 gap-4">
            <div>
              <Image
                src={"/images/shop1.png"}
                alt="shop 1"
                width={206}
                height={223}
              />
            </div>
            <div>
              <Image
                src={"/images/shop2.png"}
                alt="shop 2"
                width={206}
                height={223}
              />
            </div>

            <div className="">
              <Image
                src={"/images/shop3.png"}
                alt="shop 3"
                width={206}
                height={223}
              />
            </div>
            <div className="">
              <Image
                src={"/images/shop4.png"}
                alt="shop 4"
                width={206}
                height={223}
              />
            </div>
            <div className="">
              <Image
                src={"/images/shop5.png"}
                alt="shop 5"
                width={206}
                height={223}
              />
            </div>
          </div>
        </div>

        {/* section three */}
        <div className="flex flex-col gap-5 md:flex-row  justify-between items-center py-10 md:py-5 lg:py-5 bg-white px-16 md:px-20 lg:px-32">
          <div>Showing all 12 results</div>
          <div className="flex gap-5 items-center">
            <p>View:</p>
            <Image
              src={"/images/vector2.png"}
              alt="vector"
              width={40}
              height={40}
            />

            <Image
              src={"/images/vector1.png"}
              alt="vector"
              width={40}
              height={40}
            />
          </div>
          <div className="flex gap-3">
            <Button variant={"outline"} className="py-3 text-gray-500">
              Popularity
              <span>
                <IoIosArrowDown />
              </span>
            </Button>
            <Button variant={"outline"} className="text-white bg-blue-500 px-4">Filter</Button>
          </div>
        </div>


        {/* Section Four */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-2 lg:gap-2 bg-[#FAFAFA] px-6 md:px-14 lg:px-18 py-10 md:py-8 lg:py-8 justify-items-center items-center">
          {["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png", "logo6.png"].map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={`/images/${logo}`}
                alt={`Logo ${index + 1}`}
                width={180}
                height={130}
                className="object-contain"
              />
            </div>
          ))}
        </div>


        {/* Section five */}
        <div className="flex justify-center py-5 bg-white m-10">
          <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.map((product: Product, index: Key | null | undefined) => (
              <Link key={index} href={`/products/${product._id}`}>
                <div>
                  {/* Pass props to JustForYou component */}
                  <JustForYou
                    _id={product._id}
                    title={product.title}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    dicountPercentage={product.dicountPercentage}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}

export default Shop;