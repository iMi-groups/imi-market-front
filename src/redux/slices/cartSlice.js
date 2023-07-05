import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            let isProductExist = state.items.some(product => product.id === action.payload.id)
            state.items = isProductExist ? [...state.items] : [...state.items, {...action.payload, quantity: 1}]
        },
        deleteCart: (state, action) => {
            state.items = state.items.filter(product => product.id !== action.payload)
        },
        increaseCart: (state, action) => {
            state.items = state.items.map(product => product.id === action.payload ? {...product, quantity: product.quantity += 1} : {...product})
        },
        decreaseCart: (state, action) => {
            state.items = state.items.map(product => product.id === action.payload ? {...product, quantity: product.quantity -= 1} : {...product})
        }
    }
})

export const {
    setCart,
    deleteCart,
    increaseCart,
    decreaseCart
} = cartSlice.actions

export default cartSlice.reducer