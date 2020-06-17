import { combineReducers } from "redux";
import fetchReducer  from "./fetchReducer";
import { authLogin } from "./authReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  fetchdata: fetchReducer,
  authUser: authLogin,
  filter:filterReducer
});
