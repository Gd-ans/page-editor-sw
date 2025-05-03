import { configureStore } from "@reduxjs/toolkit";
import pageBuilderSlice from './slices/pageBuilderSlice';


const store = configureStore({
    reducer: {
        pageBuilder: pageBuilderSlice,
    },
});

export default store;