//Create Root Reducer
//To combine all reducers we create Root Reducer
//This is our root reducer

import { combineReducers } from "redux";
import cartItems from "./Reducer"; //From Reducer Function

export default combineReducers({
    cartItems, //write all reducer components here
})