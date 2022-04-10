import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartStore";

export default configureStore({
    reducer:{
        cart: cartReducer,
    }
})