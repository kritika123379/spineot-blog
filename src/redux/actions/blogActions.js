import * as types from "./types";
import { getBlogsService,setBlogsService } from "redux/services/blogServices";
import { _setBlogdata } from "utils/globalFunc";
//2
export const getBlogsAction = (data) => {
    return async dispatch => {
        try{
            dispatch({ type: types.GET_BLOG_LOADING });
            const res = await getBlogsService(data)
            if(res.statusCode === 200){
                console.log(res);
                return dispatch({type: types.GET_BLOG_SUCCESS, payload: res.data, message: res.message})
            }else{
                return dispatch({type: types.GET_BLOG_ERROR, payload: res.data, message: res.message})
            }
        }catch(err){
            return dispatch({type: types.GET_BLOG_ERROR, payload: err.data, message: err.message})

        }
    };
  };

  export const setBlogsAction = (data) => {
      console.log('thhe data is',data);
    return async dispatch => {
        try{
            dispatch({ type: types.ADD_BLOG_LOADING });
            const res = await setBlogsService(data)
            if(res.statusCode === 200){
                console.log('response',res.data);
                _setBlogdata(res.data);
                return dispatch({type: types.ADD_BLOG_SUCCESS, payload: res.data, message: res.message})
            }else{
                return dispatch({type: types.ADD_BLOG_ERROR, payload: res.data, message: res.message})
            }
        }catch(err){
            return dispatch({type: types.ADD_BLOG_ERROR, payload: err.data, message: err.message})

        }
    };
  };