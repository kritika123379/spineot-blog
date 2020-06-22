import { combineReducers } from "redux";
import fetchReducer  from "./fetchReducer";
import { authLogin } from "./authReducer";
import filterReducer from "./filterReducer";
import { blogReducer } from "./blogReducer";
import { serviceReducer } from "./serviceReducer";

export default combineReducers({
  fetchdata: fetchReducer,
  authUser: authLogin,
  filter:filterReducer,
  blog:blogReducer,
  service:serviceReducer
});
