
import JustForYou from "../productlistpage/shop-cart";

const homePage = [
  {
    id: 1,
    priceStrikeThrough: 5.38,
    image: "/images/card1.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 2,
    priceStrikeThrough: 5.38,
    image: "/images/card2.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 3,
    priceStrikeThrough: 5.38,
    image: "/images/card4.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 4,
    priceStrikeThrough: 5.38,
    image: "/images/card3.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 5,
    priceStrikeThrough: 5.38,
    image: "/images/card5.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 6,
    priceStrikeThrough: 5.38,
    image: "/images/card6.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 7,
    priceStrikeThrough: 5.38,
    image: "/images/card7.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 8,
    priceStrikeThrough: 5.38,
    image: "/images/card8.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 9,
    priceStrikeThrough: 5.38,
    image: "/images/card9.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 10,
    priceStrikeThrough: 5.38,
    image: "/images/card10.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 11,
    priceStrikeThrough: 5.38,
    image: "/images/card11.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },
  {
    id: 12,
    priceStrikeThrough: 5.38,
    image: "/images/card12.png",
    title: "Graphic Design",
    description: "English Department",
    price: 7.54
  },

]

export default function Our_Product() {
  return (
    <main className="overflow-hidden">
      {/* Section Browse The Range */}
      <div className="my-20 text-[#1d1d1d]">

        {/* Section Our Products */}
        <div>
            <p className="text-lg text-center font-sans font-semibold text-[#5e5d5d]">Featured Products</p>
          <h1 className="text-3xl text-center font-sans font-bold my-5">BESTSELLER PRODUCTS</h1>
          <p className="text-lg text-center font-sans font-semibold text-[#5e5d5d] px-3">Problems trying to resolve the conflict between</p>

          {/* Section five */}
               <div className="flex justify-center py-5 bg-white">
                 <div
                   className="grid grid-cols md:grid-cols-4 gap-8
                   "
                 >
                   {homePage.map((product, index) => (
                     <JustForYou key={index} {...product} />
                   ))}
                 </div>
               </div>
        </div>
      </div>
    </main>
  );
}