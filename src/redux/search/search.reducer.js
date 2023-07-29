import { GET_SEARCH_FAILURE,GET_SEARCH_REQUEST,GET_SEARCH_SUCCESS} from "./search.type";

const initialState={
    data : [],
    loading: false,
    error:false
 }

 export const SearchReducer=(state=initialState,{type, payload})=>{
    switch(type){
     default : {
         return state
     }
     case GET_SEARCH_SUCCESS:{
        //console.log('reducer pass', payload)
         return {
             ...state,
             data : payload,
         }
     }
     case GET_SEARCH_FAILURE:{
        //console.log('reducer fail', payload)
         return {
             ...state,
             data : [],
             error : true,
         }
     }
     case GET_SEARCH_REQUEST : {
        //console.log('reducer load', payload)
         return {
             ...state,
             data : [],
             loading : true,
         }
     }
    }
 }