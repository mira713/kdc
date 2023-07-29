import {GET_FAIL_LOGIN,GET_USER_FAILURE,GET_USER_LOGIN,GET_USER_REQUEST,GET_USER_SUCCESS} from "./auth.type";
import axios from 'axios';
const url = 'https://gold-cygnet-slip.cyclic.app';

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

export const updateAuth = (user) => async (dispatch) => {
    let token = localStorage.getItem('token');
    dispatch({ type: GET_USER_REQUEST });
    console.log(user)
    fetch(`${url}/users/${user._id}`, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json',
            'tkn': token
        }
    })
        .then(function (response) {
            response.json()
            console.log(response)
            dispatch({ type: GET_USER_LOGIN,payload:response.data })
        })
        .catch((e) => dispatch({ type:GET_FAIL_LOGIN,payload:e.message }))
}