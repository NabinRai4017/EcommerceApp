import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ProductSlice } from "./features/productSlice";
import { productApi } from "./services/productService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserSlice } from "./features/userSlice";

export const store=configureStore({
    reducer:{
        user: UserSlice.reducer,
        product: ProductSlice.reducer,

        //API
        [productApi.reducerPath] : productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(useAppDispatch)