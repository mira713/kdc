import {GET_FAIL_LOGIN,GET_USER_FAILURE,GET_USER_LOGIN,GET_USER_REQUEST,GET_USER_SUCCESS} from "./auth.type";
import axios from 'axios';
const url = 'https://red-exuberant-chicken.cyclic.app';

export const AllUser = () =>(dispatch)=>{
    dispatch({type:GET_USER_REQUEST});
    axios.get(`${url}/users`).then(r=>dispatch({type:GET_USER_SUCCESS,payload:r.data}))
}

export const postUser = (cred) =>(dispatch)=>{
    dispatch({type:GET_USER_REQUEST});
    return axios.post(`${url}/users/register`,cred).then(r=>dispatch({type:GET_USER_SUCCESS,payload:r.data}))
}

export const loginUser=(cred)=>(dispatch)=>{
    try{
        return axios.post(`${url}/users/login`,cred).then((res)=>dispatch({type:GET_USER_LOGIN,payload:res.data}))
    }catch(e){
        dispatch({type:GET_FAIL_LOGIN,payload:e.message})
    }
}