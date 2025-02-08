

import React from "react";
import Link from "next/link";
import { Product } from "../productlistpage/shop-cart"; 
import JustForYou from "../productlistpage/shop-cart"; 

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  // const reduxProducts = useAppSelector((state: any) => state.products);

  // console.log("Redux Products: ", reduxProducts);

  return (
    <div className="flex justify-center py-5 bg-white m-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <Link key={index} href={`/products/${product._id}`}>
            <div>
              {/* Render the Product */}
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
  );
}