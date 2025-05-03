import { configureStore } from "@reduxjs/toolkit";
import selectedTextReducer from './slices/selectedTextSlice';


const store = configureStore({
    reducer: {
        selectedText: selectedTextReducer,
    },
});

export default store;