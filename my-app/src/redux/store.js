import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools} from "redux-devtools-extension"
import cartReducer from "./cartRedux";

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
},composeWithDevTools())