import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        listItems: [],
        totalQty: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.listItems.find(x => x.image === newItem.image)

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price
            } else {
                state.listItems.push({
                    id: newItem.id,
                    name: newItem.name,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                    price: newItem.price,
                    image: newItem.image
                })

            }
        },
        removeFromCart(state, action) {
            const image = action.payload
            const existingItem = state.listItems.find(x => x.image == image.image)

            if (existingItem.quantity > 1) {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            } else {
                state.listItems = state.listItems.filter(x => x.image != image.image )
            }

        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;