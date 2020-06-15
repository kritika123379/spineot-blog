import * as types from "../actions/types";


const initialState = {
    type:"",
    fetch_Data:[],
    fetch_Error:'',
    recievedAt:'',
    thArray : ["name", "_id", "email", "phone", "service","createdAt","updatedAt"]
  };
  
  export default function fetchReducer(state = initialState, action) {
    switch (action.type) {
       case types.FETCH_SUCCESS:
        return Object.assign({}, state, {    
          fetch_Data :action.payload.data.queries,
          recievedAt: Date.now()
        })
      case types.FETCH_ERROR:
        console.log('action',action.payload.error);
        return{
          ...state,
          type:action.type,
          fetch_Error:action.payload.Error.message
        }  
      default:
        return state;
    }
  }
  