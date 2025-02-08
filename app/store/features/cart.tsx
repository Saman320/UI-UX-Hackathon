import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/app/utils/types";
// Define the initial state type
interface CartState {
  items: CartItem[];
}

// Initial state
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Set cart from localStorage
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    // Add item to cart
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i._id === item._id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    // Increment quantity
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i._id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
    },
    // Decrement quantity
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i._id === action.payload);
      if (item && (item.quantity || 1) > 1) {
        item.quantity = (item.quantity || 1) - 1;
      }
    },
    // Remove item from cart
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
  },
});

// Export the actions
export const {
  setCart,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;

// Export the reducer as the default export
export default cartSlice.reducer;