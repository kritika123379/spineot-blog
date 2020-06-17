import { FILTER_DATA_BY_DATE ,
    SEARCH_BY_ID_NAME,
    SORT_DATA_BY_ID,
    SORT_DATA_BY_SERVICE
} from "./types";

export const filterByDate = (tabledata,sort) => (dispatch) => {
    console.log('filter by action',tabledata,sort)
   // console.log('---',size,product    s.filter(a=> a.updatedAt.indexOf(size.toUpperCase() >= 0)))
    //console.log('---',products.sort((a,b)=> a._id > b._id))
    //console.log('---',products.sort((a,b)=> a._id < b._id))
    
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
  console.log('search by Name ',item,search);
  console.log('---',search,item.filter(a=> a._id === search || a.name === search || a.email === search || a.phone === search ||a.updatedAt === search || a.service === search))
//   if(item._id === search){
//     console.log('888',item._id  === search);
//     return item._id === search
// }
//  if(item.name ===  search){
//     console.log('888',item.name  === search);
//     return item.name === search
// }
//  if(item.email === search){
//     console.log('888',item.email  === search);
//     return item.email === search
// }
//   if(item.phone === search){
//     console.log('888',item.phone  === search);
//     return item.phone === search
// }
//   if(item.service === search){
//     console.log('888',item.phone  === search);
//     return item.service === search
// }
// else {
//  return item
// }
    return dispatch({
            type:SEARCH_BY_ID_NAME,
           payload:{
            filterdata: item.filter(a=>{
                console.log('888',a._id  === search);
              return a._id === search || a.name === search || a.email === search || a.phone === search  || a.service === search
               
              })  
           } 
        })
    
    }    



export const sortDataById = (data,sort) => (dispatch) => {
    console.log('sortdata',data,sort)
   /* if(sort !== ''){
        data.sort((a,b)=> (sort === 'lowest') ?
        (a._id > b._id ? 1 : -1 )
        :(a._id < b._id ?  1 : -1)
        )
    }
    else {
        data.sort((a,b)=> (a._id > b._id ? 1 : -1))
    }*/
    return dispatch({
        type:SORT_DATA_BY_ID,
        payload:{
            sort:sort,
            filterdata:sort !== '' ? data.sort((a,b)=> (sort === 'increase' || sort === "true") 
            ?(a._id > b._id ? 1 :-1)
            : (a._id < b._id ? 1 :-1)
            )
            :data.sort((a,b)=> (a.email > b.email ? 1 : -1))
        }

    })
}

export const sortDataByService = (data,servicevalue) => (dispatch) => {
    console.log('sort data by service',data,servicevalue);
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






