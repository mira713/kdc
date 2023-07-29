import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Register from "../components/register";
import Login from "../components/login";
import Home from "../components/home";
import AllPosts from "../components/allPosts";

const AllRoute = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<PrivateRoute>
                <Home/>
            </PrivateRoute>}/>
            <Route path="/allPosts" element={<PrivateRoute>
                <AllPosts/>
            </PrivateRoute>}/>
        </Routes>
    )
}

export default AllRoute