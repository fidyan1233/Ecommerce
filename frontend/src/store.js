import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { applyMiddleware, combineReducers } from "redux";
import { productReducer } from "./reducers/productReducer";


export const store = configureStore( {
    reducer:{
    products:productReducer

    }
}
);


export default store;

