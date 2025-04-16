import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Global/Slice"

export const store = configureStore({
    reducer:{
        Todolist: todoReducer
    }
})