import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";

const reducer = combineReducers({
  cartReducer,
})

export default reducer