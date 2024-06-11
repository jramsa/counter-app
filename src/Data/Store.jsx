import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Components/CounterSlice';

export const store = configureStore({
    reducer:{
        counter : counterReducer
    }
})
