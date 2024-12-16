import CarouselFluid from "./components/CarouselFluid";
import Carousel2 from "./components/Carousel2";
import DesktopCard from "./components/DesktopCard";
import DesktopHeader from "./components/DesktopHeader";
import DesktopProduct from "./components/DesktopProduct";
import FeaturedPosts from "./components/FeaturedPost";
import FeaturedPost from "./components/FeaturedPost";
import Footer from "./components/Footer";




export default function Home() {
  return (
    <div>
      < DesktopHeader />
      < DesktopCard />
      < DesktopProduct />
      < Carousel2/>
      < CarouselFluid />
      < FeaturedPost />
      < Footer />
      
    </div>
  );
}
