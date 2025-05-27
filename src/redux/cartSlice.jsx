import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.products.find((item) => item.id === newItem.id)
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image
                })
            }
            state.totalPrice += newItem.price
            state.totalQuantity++
        },
        removeFromCart(state, action) {
            const itemToRemove = action.payload
            state.products = state.products.filter((item) => item.id !== itemToRemove.id)
            state.totalPrice = state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
            state.totalQuantity = state.totalQuantity - itemToRemove.quantity
        },
        increaseQuantity(state, action) {
            const itemToIncrease = action.payload
            const foundItem = state.products.find(item => item.id === itemToIncrease.id)
            foundItem.quantity += 1
            state.totalPrice = state.totalPrice + foundItem.price
            state.totalQuantity++
        },
        decreaseQuantity(state, action) {
            const itemToDecrease = action.payload
            const foundItem = state.products.find(item => item.id === itemToDecrease.id)
            foundItem.quantity > 1 ? foundItem.quantity-- : 1
            state.totalPrice = foundItem.quantity > 1 ? state.totalPrice - foundItem.price : state.totalPrice
            state.totalQuantity = foundItem.quantity > 1 ? state.totalQuantity-- : state.totalQuantity
        }
    }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer