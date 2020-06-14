import * as types from "./types";
import { loginService } from '../services/userService';

export const loginUserAction = (data) => {
    return async dispatch => {
        try{
            dispatch({ type: types.LOGIN_LOADING });
            const res = await loginService(data)
            if(res.statusCode === 200){
                return dispatch({type: types.LOGIN_SUCCESS, payload: res.data, message: res.message})
            }else{
                return dispatch({type: types.LOGIN_ERROR, payload: res.data, message: res.message})
            }
        }catch(err){
            return dispatch({type: types.LOGIN_ERROR, payload: err.data, message: err.message})

        }
    };
  };