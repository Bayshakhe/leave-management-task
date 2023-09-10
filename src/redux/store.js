import { configureStore } from "@reduxjs/toolkit";
import  departmentService  from "./features/department.service";

export const store = configureStore({
    reducer:{
        [departmentService.reducerPath]: departmentService.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(departmentService.middleware)
})