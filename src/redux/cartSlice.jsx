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
            if (foundItem) {
                foundItem.quantity += 1
                foundItem.totalPrice += foundItem.price
                state.totalPrice += foundItem.price
                state.totalQuantity += 1
            }
        },
        decreaseQuantity(state, action) {
            const itemToDecrease = action.payload
            const foundItem = state.products.find(item => item.id === itemToDecrease.id)

            if (foundItem) {
                if (foundItem.quantity > 1) {
                    foundItem.quantity -= 1
                    foundItem.totalPrice -= foundItem.price
                    state.totalPrice -= foundItem.price
                    state.totalQuantity -= 1
                } else {
                    state.products = state.products.filter(item => item.id !== foundItem.id)
                    state.totalPrice = state.totalPrice - (foundItem.price * foundItem.quantity)
                    state.totalQuantity = state.totalQuantity - foundItem.quantity
                }
            }
        },
        clearCart(state, action) {
            state.products = []
            state.totalPrice = 0
            state.totalQuantity = 0
        }
    }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer