import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../Reducers/productSlice'

export const store = configureStore({
    reducer:{
        Product: ProductReducer,
    }
});