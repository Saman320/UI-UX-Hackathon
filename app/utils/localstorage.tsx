// import { CartItem } from "../store/cartSlice";

// const CART_KEY = 'cart';
// const WISHLIST_KEY = 'wishlist';

// // Helper function to load data from localStorage
// export const loadFromLocalStorage = (key: string) => {
//   if (typeof window !== 'undefined') {
//     const savedState = localStorage.getItem(key);
//     if (savedState) {
//       return JSON.parse(savedState);
//     }
//   }
//   return null;
// };

// // Helper function to save data to localStorage
// export const saveToLocalStorage = (key: string, value: string ) => {
//   if (typeof window !== 'undefined') {
//     localStorage.setItem(key, JSON.stringify(value));
//   }
// };

// // Now you can use these functions to load and save cart and wishlist items
// export const loadCartFromLocalStorage = () => {
//   const cart = loadFromLocalStorage(CART_KEY);
//   return cart ? cart : { items: [], totalQuantity: 0 }; // Return totalQuantity too
// };

// export const loadWishlistFromLocalStorage = () => {
//   const wishlist = loadFromLocalStorage(WISHLIST_KEY);
//   return wishlist ? wishlist.items : [];
// };

// export const saveCartToLocalStorage = (cartState: { items: CartItem[], totalQuantity: number }) => {
//   saveToLocalStorage(CART_KEY, cartState);
// };

// export const saveWishlistToLocalStorage = (wishlistItems: CartItem[]) => {
//   saveToLocalStorage(WISHLIST_KEY, { items: wishlistItems });
// };