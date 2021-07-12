import { configureStore } from "@reduxjs/toolkit";
import cartButtonReducer from "./cart-button";
import addToCartReducer from "./add-to-cart";

const store = configureStore({
  reducer: { cartbutton: cartButtonReducer, addtocart: addToCartReducer },
});

export default store;
