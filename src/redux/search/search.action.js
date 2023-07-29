import { GET_SEARCH_FAILURE,GET_SEARCH_REQUEST,GET_SEARCH_SUCCESS} from "./search.type"
import axios from 'axios';
let url = "https://fair-plum-trout-coat.cyclic.app";

export const search = (query) => async(dispatch) => {
    console.log(query)
    const token = localStorage.getItem("token")
    const config = {
        headers: { 'tkn': token }
      };
    dispatch({type:GET_SEARCH_REQUEST})
    try{
        let res = await axios.get(`https://fair-plum-trout-coat.cyclic.app/search/item/${query}`,config);
        res = res.data;
        dispatch({type:GET_SEARCH_SUCCESS,payload:res})
    }catch(e){
        dispatch({type:GET_SEARCH_FAILURE})
    }
}
