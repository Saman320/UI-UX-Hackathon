
import { client } from "@/sanity/lib/client";
import ProductList from "./productlist";
import { Product } from "../productlistpage/shop-cart";

const getProduct = async () => {
  const query = `*[_type == "product"][0...12] {
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

export default async function Our_Product() {
  const data = await getProduct();

  return (
    <main className="overflow-hidden">
      {/* Section Browse The Range */}
      <div className="my-20 text-[#1d1d1d]">
        <div>
          <p className="text-lg text-center font-sans font-semibold text-[#5e5d5d]">Featured Products</p>
          <h1 className="text-3xl text-center font-sans font-bold my-5">BESTSELLER PRODUCTS</h1>
          <p className="text-lg text-center font-sans font-semibold text-[#5e5d5d] px-3">
            Problems trying to resolve the conflict between
          </p>

          {/* Pass fetched products to ProductList */}
          <ProductList products={data} />
        </div>
      </div>
    </main>
  );
}