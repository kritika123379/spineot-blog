import { combineReducers } from "redux";
import fetchReducer  from "./fetchReducer";
import { authLogin } from "./authReducer";

export default combineReducers({
  fetchdata: fetchReducer,
  authUser: authLogin
});
