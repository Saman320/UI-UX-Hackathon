
import { Product } from "@/app/multiy-components/productlistpage/shop-cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: Product[];
}

// Load initial state from localStorage
const loadInitialState = (): WishlistState => {
  if (typeof window !== 'undefined') {
    const storedWishlist = localStorage.getItem("wishlist");
    return {
      items: storedWishlist ? JSON.parse(storedWishlist) : [],
    };
  }
  return { items: [] };
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: loadInitialState(),
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i._id === item._id);
      if (!existingItem) {
        state.items.push(item);
        // Update localStorage when adding item
        if (typeof window !== 'undefined') {
          localStorage.setItem("wishlist", JSON.stringify(state.items));
        }
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      // Update localStorage when removing item
      if (typeof window !== 'undefined') {
        localStorage.setItem("wishlist", JSON.stringify(state.items));
      }
    },
    clearWishlist: (state) => {
      state.items = [];
      // Clear localStorage when clearing wishlist
      if (typeof window !== 'undefined') {
        localStorage.removeItem("wishlist");
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;