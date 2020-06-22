import * as types from "../actions/types";


const initialState = {
    type: null,
    data: null,
    message: null,
    loading: false,
};

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        //for get actions
        case types.GET_BLOG_LOADING:
        return {
          ...state,
          type: action.type,
          data: action.payload,
          message: action.message,
          loading:true
        };
        case types.GET_BLOG_SUCCESS:
          console.log('get blog action',action.payload);
        return {
          ...state,
          type: action.type,
          data: action.payload,
          message: action.message,
          loading: false
        };
        case types.GET_BLOG_ERROR:
        return{
          ...state,
          type:action.type,
          data: action.payload,
          message: action.message,
          loading:true
        }
        // for adding the data
        case types.ADD_BLOG_LOADING:
        return {
          ...state,
          type: action.type,
          data: action.payload,
          message: action.message,
          loading:true
        };
        case types.ADD_BLOG_SUCCESS:
        return {
          ...state,
          type: action.type,
          data: action.payload,
          message: action.message,
          loading:false
        };
        case types.ADD_BLOG_ERROR:
        return{
          ...state,
          type:action.type,
          data: action.payload,
          message: action.message,
          loading:true
        }
      default:
        return state;
    }
}
