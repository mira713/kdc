import * as types from "./auth.type";
import {getLocal, setLocal} from '../../Utils/localStorage'

const initialState = {
    isAuth:"",
    token:"",
    isAuthLoading:false,
    isAuthError:false,
    data:{},
    user:{}
}

export const reducer = (state=initialState,action)=>{
    const {type,payload} = action;

    switch(type){
        case types.GET_USER_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }

        case types.GET_USER_SUCCESS:{
            return {

                ...state,isLoading:false, data : payload,isAuth:true
            }
        }

        case types.GET_USER_LOGIN:{
            setLocal('isAuth',false)
            return {
                ...state, isLoading:false, isError:false,token: payload, isAuth:true, user: payload.user
            }
        }

        case types.GET_FAIL_LOGIN:{
            setLocal('isAuth', false)
            return{
                ...state, isLoading: true, isError: true, token: '', isAuth: false
            }
        }
        default: return state
    }
}