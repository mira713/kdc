import {GET_FAIL_LOGIN,GET_USER_FAILURE,GET_USER_LOGIN,GET_USER_REQUEST,GET_USER_SUCCESS} from "./auth.type";
import axios from 'axios';
const url = 'https://smiling-goat-gabardine.cyclic.app';

export const AllUser = () =>(dispatch)=>{
    dispatch({type:GET_USER_REQUEST});
    fetch(`${url}/users`).then((res)=>{res.json();})
}

export const postUser = (cred) =>(dispatch)=>{
    dispatch({type:GET_USER_REQUEST});
    return axios.post(`${url}/user/register`,cred).then(r=>dispatch({type:GET_USER_SUCCESS,payload:r.data}))
}

export const loginUser=(cred)=>(dispatch)=>{
    try{
        return axios.post(`${url}/user/login`,cred).then((res)=>dispatch({type:GET_USER_LOGIN,payload:res.data}))
    }catch(e){
        dispatch({type:GET_FAIL_LOGIN,payload:e.message})
    }
}