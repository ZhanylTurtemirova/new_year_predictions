import { combineReducers } from "redux";
import { usersReducer } from "./users.reducer";
import {wishesReducer} from "./wishes.reducer";

export default combineReducers({ usersReducer, wishesReducer });
