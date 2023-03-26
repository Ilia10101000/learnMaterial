import { configureStore } from "@reduxjs/toolkit";
import { customeReducer } from "./customReducer";
import { cashReducer } from "./cashReducer";

export const store = configureStore({
    reducer: {
        cash: cashReducer,
        customes: customeReducer
    },
    devTools:true
})