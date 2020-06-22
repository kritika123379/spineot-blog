import * as types from "../actions/types";


const initialState = {
    type: null,
    data: null,
    message: null,
    loading: false,
};
//4
export const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        //for get actions
        case types.GET_SERVICES_LOADING:
        return {
          ...state,
          type: action.type,
          data: action.payload,
          message: action.message,
          loading:true
        };
        case types.GET_SERVICES_SUCCESS:
        return {
          ...state,
          type: action.type,
          data: action.payload,
          message: action.message,
          loading: false
        };
        case types.GET_SERVICES_ERROR:
        return{
          ...state,
          type:action.type,
          data: action.payload,
          message: action.message,
          loading:true
        }
        // for adding the data
        case types.ADD_SERVICES_LOADING:
        return {
          ...state,
          type: action.type,
          data: action.payload,
          message: action.message,
          loading:true
        };
        case types.ADD_SERVICES_SUCCESS:
        return {
          ...state,
          type: action.type,
          data: action.payload,
          message: action.message,
          loading:false
        };
        case types.ADD_SERVICES_ERROR:
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
