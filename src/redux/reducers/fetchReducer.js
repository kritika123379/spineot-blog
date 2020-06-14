import * as types from "../actions/types";


const initialState = {
    type:"",
    fetch_Data:[],
    fetch_Error:''  ,
    recievedAt:'',
    thArray : ["name", "email", "phone", "service","createdAt","updatedAt"],
    tdArray : [["Mongo user", "5ecb9fc9ac11800745c45709","jalajgoel45@gmail.com", "1234567890", "MOBILE SERVICES","2020-05-25T10:36:57.984Z"]]
  };

  export default function fetchReducer(state = initialState, action) {
    switch (action.type) {
       case types.FETCH_SUCCESS:
        return Object.assign({}, state, {
          fetch_Data :action.payload.data.queries,
          recievedAt: Date.now()
        })
      case types.FETCH_ERROR:
        return{
          ...state,
          type:action.type,
          fetch_Error:action.payload.error.message
        }
      default:
        return state;
    }
  }
