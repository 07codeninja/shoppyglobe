import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const existing = state.cartItems.find(i => i.id === item.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        changeQuantity(state, action) {
            const { id, quantity } = action.payload;
            const item = state.cartItems.find(i => i.id === id);
            if (item) item.quantity = quantity;
        },
    },
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
