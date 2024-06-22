import { combineReducers, createStore } from "redux";
import { cartListReducer } from "../reducers/cartlist.reducer";
import { favListReducer } from "../reducers/favlist.reducer";
import userdataReducer from "../reducers/userdata.reducer";
const reducers = combineReducers({
    cartList: cartListReducer,
    favList: favListReducer,
    userData: userdataReducer
})
export const globalState = createStore(reducers)