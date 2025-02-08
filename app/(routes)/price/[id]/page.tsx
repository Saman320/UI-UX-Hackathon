"use client";

import { Product } from "@/app/multiy-components/productlistpage/shop-cart";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/app/components/ui/breadcrumb";
import { Button } from "@/app/components/ui/button";
import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import Green_Header from "@/app/multiy-components/headers/green-header";
import Header from "@/app/multiy-components/headers/header";

const getProduct_fetching = async () => {
  const query = `*[_type == "product"] {
    _id,
    title,
    description,
    "imageUrl": productImage.asset->url,
    price,
    tags,
    discountPercentage,
    isNew
  }`;
  return await client.fetch(query);
};

function ProductDetail() {
  const [posts, setPosts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProduct_fetching();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const id = params?.id;
  const card = posts?.find((p) => p._id === id);

  if (loading) {
    return <div className="h-[600px] text-center mt-20 font-bold text-3xl font-serif">Loading...</div>;
  }

  if (!card) {
    return <div>No product found for the given ID.</div>;
  }

  return (
    <div>
      <Green_Header />
      <Header />
      {/* section one */}
      <div className="flex flex-col font-sans font-semibold bg-[#FAFAFA] gap-0">
        {/* Breadcrumb */}
        <div className="p-7">
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

        {/* Product Details */}
        <div className="flex flex-col md:flex-row  justify-center items-center md:p-9">
          <div className="md:w-1/2 w-full flex flex-col py-10 gap-3 items-center md:justify-start">
            <Image src={card.imageUrl} alt={card.title} width={504} height={450} />
            <div className="flex gap-3 justify-start">
              <Image src={card.imageUrl} alt={card.title} width={100} height={75} />
              <Image src={card.imageUrl} alt={card.title} width={100} height={75} />
            </div>
          </div>

          <div className="md:w-1/2 w-full text-[#858585] space-y-4 flex flex-col justify-center font-sans font-semibold items-start md:justify-start px-9">
            <h1 className="text-2xl text-black">{card.title}</h1>
            <p className="flex text-yellow-500 gap-2 items-center">
              <IoMdStar size={20} />
              <IoMdStar size={20} />
              <IoMdStar size={20} />
              <IoMdStar size={20} />
              <FaRegStar />
              <span className="text-black">10 Reviews</span>
            </p>
            <div className="font-bold font-serif text-2xl text-black">{card.price && card.dicountPercentage ? (
              <>
                {/* Original price with strikethrough */}
                <p className="text-lg text-gray-400 line-through">
                  ${card.price.toFixed(2)}
                </p>

                {/* Discounted price */}
                <p className="text-lg text-red-500">
                  ${((card.price * (100 - card.dicountPercentage)) / 100).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="text-lg text-green-800">
                ${card.price?.toFixed(2)} {/* Show original price if no discount */}
              </p>
            )}</div>
            <p>
              Availability : <span className="">10</span>
            </p>
            <p className="border-b border-gray-500 pb-4">{card.description.length > 400
              ? `${card.description.slice(0, 400)}.`
              : card.description}</p>
            <div className="flex gap-4 py-4">
              <div className="w-[30px] h-[30px] rounded-full bg-blue-500"></div>
              <div className="w-[30px] h-[30px] rounded-full bg-[#23856D]"></div>
              <div className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></div>
              <div className="w-[30px] h-[30px] rounded-full bg-[#252B42]"></div>
            </div>

            {/* Buttons */}
            <div className="flex gap-5 py-4 items-center">
              <Button className="bg-blue-500 py-6 px-9 text-md rounded-[8px] text-white hover:bg-white hover:text-black">Add Item</Button>
              <div className="flex gap-3">
                <CiHeart size={40} className="bg-white p-2 rounded-full text-black" />
                <PiShoppingCartSimpleThin size={40} className="bg-white p-2 rounded-full text-black" />
                <IoEye size={30} className="bg-white p-2 rounded-full text-black" />
              </div>
            </div>



          </div>

        </div>
        {/* section four */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-20 md:gap-3 lg:gap-4 bg-[#FAFAFA] px-9 justify-items-center items-center py-6">
          <div>
            <Image
              src={"/images/logo1.png"}
              alt="logo 1"
              height={100}
              width={180}
            />
          </div>
          <div>
            <Image
              src={"/images/logo2.png"}
              alt="logo 1"
              height={100}
              width={180}
            />
          </div>
          <div>
            <Image
              src={"/images/logo3.png"}
              alt="logo 1"
              height={100}
              width={180}
            />
          </div>
          <div>
            <Image
              src={"/images/logo4.png"}
              alt="logo 1"
              height={100}
              width={180}
            />
          </div>
          <div>
            <Image
              src={"/images/logo5.png"}
              alt="logo 1"
              height={100}
              width={180}
            />
          </div>
          <div>
            <Image
              src={"/images/logo6.png"}
              alt="logo 1"
              height={100}
              width={180}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;