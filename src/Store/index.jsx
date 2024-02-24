import { configureStore } from "@reduxjs/toolkit";
import index from "./Slices";


export const  store = configureStore({
    reducer:{
        api:index,
    },
})