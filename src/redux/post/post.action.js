import {
    POST_ADD_SUCCESS,
POST_FUNC_ERROR,
POST_FUNC_LOADING,
POST_DELETE_SUCCESS,
POST_UPDATED_SUCCESS,
POST_GET_SUCCESS,
} from "./post.type";
import axios from "axios";
const url = 'https://red-exuberant-chicken.cyclic.app';


export const getPost = (page=1) => async (dispatch) => {
    let token = localStorage.getItem('token');
    const config = {
        headers: {
            'Content-type': 'application/json',
            'tkn': token
        }
    };
    dispatch({ type: POST_FUNC_LOADING });
    try{
        let res =await axios.get(`${url}/post?page=${page}`,config);
        let da = res.data.data;
        let c = res.data.count
        // console.log('action: ',res.data)
        dispatch({type:POST_GET_SUCCESS,payload:{da,c}})
    }catch(e){
        dispatch({type:POST_FUNC_ERROR,payload:e.message})
    }
}

export const addPost = (data) => (dispatch) => {
    let {title,msg,likes,dislikes} = data
    let obj = {title,msg,likes,dislikes}
    dispatch({ type: POST_FUNC_LOADING });
    

    return axios.post(`${url}/post/add`,[obj,{headers:{tkn:localStorage.getItem("token")}}])
    .then(r=>dispatch({type: POST_ADD_SUCCESS, payload:r.data}))
}

export const updatePost = (product) => async (dispatch) => {
    let token = localStorage.getItem('token');
    dispatch({ type: POST_FUNC_LOADING });
    fetch(`${url}/post/${product._id}`, {
        method: 'PATCH',
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json',
            'tkn': token
        }
    })
        .then(function (response) {
            response.json()
            dispatch({ type: POST_UPDATED_SUCCESS, payload: response })
        })
        .catch((err) => dispatch({ type: POST_FUNC_ERROR, payload: err.message }))
}

export const deletePost = (id) => async (dispatch) => {
    let token = localStorage.getItem('token');
    dispatch({ type: POST_FUNC_LOADING });
    fetch(`${url}/cart/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'tkn': token
        }
    })
        .then((res) => {
            res.json()
            dispatch({ type: POST_DELETE_SUCCESS, payload: res })
        })

        .catch((err) => dispatch({ type: POST_FUNC_ERROR, payload: err.message }))
}