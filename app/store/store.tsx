import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "@/app/store/features/cart"
import wishlistReducer from "./features/wishlistSlice"


export const store = configureStore({
  reducer: {
    cart: cartReducer, // Register the cart slice
    wishlist: wishlistReducer, // Wishlist slice add karein

  },
});

export type RootState = ReturnType<typeof store.getState>; // Infers state structure
export type AppDispatch = typeof store.dispatch;