import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layoutSlice";
import categoriesSlice from "./slices/categoriesSlice";
import productsSlice from "./slices/productsSlice";
import cartSlice from './slices/cartSlice';
import bannersSlice from "./slices/bannersSlice";

const store = configureStore({
    reducer: {
        layout: layoutSlice,
        categories: categoriesSlice,
        products: productsSlice,
        cart: cartSlice,
        banners: bannersSlice
    }
})

export default store;