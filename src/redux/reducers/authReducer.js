import * as types from "../actions/types";


const initialState = {
    type: null,
    data: null,
    message: null
};

export const authLogin = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_LOADING:
        return {
          ...state,
          type: action.type,
          data: action.payload,
          message: action.message
        };
        case types.LOGIN_SUCCESS:
        return {
          ...state,
          type: action.type,
          data: action.payload,
          message: action.message
        };
        case types.LOGIN_ERROR:
        return{
          ...state,
          type:action.type,
          data: action.payload,
          message: action.message
        }
      default:
        return state;
    }
}
