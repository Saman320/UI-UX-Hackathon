import { Button } from '@/app/components/ui/button';
import React, { useEffect, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/features/cart';
import { client } from '@/sanity/lib/client';
import { Product } from '../productlistpage/shop-cart';
import { CartItem } from '@/app/utils/types'; // Import centralized type

function App({ id }: { id: string }) {
  const getProduct_fetching = async (): Promise<Product[]> => {
    const query = `*[_type == "product"] {
      _id,
      title,
      description,
      "imageUrl": productImage.asset->url,
      price,
      tags,
      dicountPercentage,
      isNew
    }`;
    return client.fetch(query);
  };

  const [posts, setPosts] = useState<Product[] | null>(null);

  useEffect(() => {
    getProduct_fetching()
      .then((data) => {
        setPosts(data);
      })
      .catch(() => console.log("error"));
  }, []);

  const card = posts?.find((p) => p._id === id);

  const dispatch = useDispatch();
  const notify = () => toast.success('Product added to successfully!✅', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const handleAddToCart = () => {
    if (card) {
      const storedCart = localStorage.getItem("cart");
      const cart = storedCart ? JSON.parse(storedCart) : [];
      const cartItems: CartItem = {
        _id: card._id, // Ensure this matches the centralized type
        title: card.title,
        price: card.price,
        quantity: 1,
        imageUrl: card.imageUrl,
      };
      cart.push(cartItems);
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch(addToCart(cartItems)); 
      notify();
    }
  };

  return (
    <div>
      <Button onClick={handleAddToCart} className="bg-blue-500 py-6 px-7 rounded-xl text-white hover:bg-white hover:text-black">
        Add to Cart
      </Button>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;