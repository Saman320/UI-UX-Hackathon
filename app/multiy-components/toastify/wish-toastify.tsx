// Then update wish-tostify.tsx:
import React, { useEffect, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { client } from '@/sanity/lib/client';
import { Product } from '../productlistpage/shop-cart';
import { addToWishlist } from '@/app/store/features/wishlistSlice';
import { FiHeart } from 'react-icons/fi';
import { RootState } from '@/app/store/store';

function WishAdd({ id }: { id: string }) {
    const [product, setProduct] = useState<Product | null>(null);
    const dispatch = useDispatch();
    // Get current wishlist items to check for duplicates  
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

    useEffect(() => {
        const fetchProduct = async () => {
            const query = `*[_type == "product" && _id == $id][0] {
        _id,
        title,
        description,
        "imageUrl": productImage.asset->url,
        price,
        tags,
        discountPercentage,
        isNew
      }`;
            try {
                const data = await client.fetch(query, { id });
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const notify = (message: string, isError: boolean = false) => {
        toast[isError ? 'error' : 'success'](message, {
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
    };

    const handleAddToWishlist = () => {
        if (product) {
            // Check if product already exists in wishlist
            const existingItem = wishlistItems.find(item => item._id === product._id);
            
            if (!existingItem) {
                dispatch(addToWishlist(product));
                notify('Product added to wishlist!');
            } else {
                notify('Product is already in your wishlist!', true);
            }
        }
    };

    return (
        <div>
            <FiHeart
                size={30}
                onClick={handleAddToWishlist}
                className="cursor-pointer font-bold transform transition-all duration-300 hover:-translate-y-3 hover:text-blue-500"
            />
            <ToastContainer />
        </div>
    );
}

export default WishAdd;