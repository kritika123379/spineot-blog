import * as types from "./types";
import { getServices, setServices} from "redux/services/services";
//2
export const getServicesAction = (data) => {
    return async dispatch => {
        try{
            dispatch({ type: types.GET_SERVICES_LOADING });
            const res = await getServices(data)
            if(res.statusCode === 200){
                console.log(res);
                return dispatch({type: types.GET_SERVICES_SUCCESS, payload: res.data, message: res.message})
            }else{
                return dispatch({type: types.GET_SERVICES_ERROR, payload: res.data, message: res.message})
            }
        }catch(err){
            return dispatch({type: types.GET_SERVICES_ERROR, payload: err.data, message: err.message})

        }
    };
  };
  export const setServicesAction = (data) => {
    return async dispatch => {
        try{
            dispatch({ type: types.ADD_SERVICES_LOADING });
            const res = await setServices(data)
            if(res.statusCode === 200){
                console.log(res);
                return dispatch({type: types.ADD_SERVICES_SUCCESS, payload: res.data, message: res.message})
            }else{
                return dispatch({type: types.ADD_SERVICES_ERROR, payload: res.data, message: res.message})
            }
        }catch(err){
            return dispatch({type: types.ADD_SERVICES_ERROR, payload: err.data, message: err.message})

        }
    };
  };