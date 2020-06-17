import * as types from "../actions/types";


const initialState = {
    type:"",
    filteredData:[]
  };

  export default function filterReducer(state = initialState, action) {
    switch (action.type) {
     
      case types.FILTER_DATA_BY_DATE:
        console.log('action',action);
        return{
          ...state,
          type:action.type,
        filteredData:action.payload.filterdata
        }  
        case types.SEARCH_BY_ID_NAME:
        return{
          ...state,
          type:action.type,
        filteredData:action.payload.filterdata
        }  
        case types.SORT_DATA_BY_SERVICE:
            return{
              ...state,
              type:action.type,
            filteredData:action.payload.filterdata
            }  
        case types.SORT_DATA_BY_ID:
                return{
                  ...state,
                  type:action.type,
                filteredData:action.payload.filterdata
                }  
            
      default:
        return state;
    }
  }
