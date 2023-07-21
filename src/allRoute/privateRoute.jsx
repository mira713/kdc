import React from "react";
import { UseSelector } from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {isAuth, setisAuth} = React.useState(localStorage.getItem('isAuth')?true:false);
    
    // if(!isAuth){
    //     return(
    //         <Navigate to={'/login'} />
    //     )
    // }
    return children
}

export default PrivateRoute