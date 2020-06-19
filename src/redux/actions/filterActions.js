import { FILTER_DATA_BY_DATE ,
    SEARCH_BY_ID_NAME,
    SORT_DATA_BY_ID,
    SORT_DATA_BY_SERVICE
} from "./types";

export const filterByDate = (tabledata,sort) => (dispatch) => {
    return dispatch ({
            type:FILTER_DATA_BY_DATE,
            payload:{
                filterdata:tabledata,
                size:sort !== '' ? tabledata.sort((a,b)=> (sort === 'isOldestFirst') 
                ?(a.createdAt > b.createdAt ? 1 :-1)
                : (a.createdAt < b.createdAt ? 1 :-1)
                )
                :tabledata.sort((a,b)=> (a.createdAt > b.createdAt ? 1 : -1))
            }           
        })
    }

export const searchByName = (item,search) => (dispatch) => { 
   return dispatch({
            type:SEARCH_BY_ID_NAME,
            payload:{
            filterdata: item.filter(a=>{
              return a._id === search ||
                    a.name === search ||
                    a.email === search ||
                    a.phone === search  || 
                    a.service === search
               
              })  
           } 
        })
    
    }    

export const sortDataById = (data,sort) => (dispatch) => {
    return dispatch({
        type:SORT_DATA_BY_ID,
        payload:{
            sort:sort,
            filterdata:sort !== '' ? data.sort((a,b)=> (sort === 'highestfirst') 
            ?(a._id > b._id ? 1 :-1)
            : (a._id < b._id ? 1 :-1)
            )
            :data.sort((a,b)=> (a.email > b.email ? 1 : -1))
        }

    })
}

export const sortDataByService = (data,servicevalue) => (dispatch) => {  
  return dispatch({
        type:SORT_DATA_BY_SERVICE,
        payload:{
            sort:servicevalue,
            filterdata:data.filter(item=>{
                return item.service ===  servicevalue
            })
        }
    })

}






