import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './NewsSlice'
import categorySlice from './CategorySlice'

const store = configureStore({
    reducer: {
        news: newsReducer,
        categorySlice: categorySlice
    }
})

export default store;