import { configureStore } from "@reduxjs/toolkit";//set up the data layer
import navReducer from "./slices/navSlice"; //

export const store = configureStore({
    reducer:{
        nav: navReducer,
    },
});