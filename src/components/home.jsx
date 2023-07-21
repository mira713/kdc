import React, { useEffect, useState } from "react";
import './home.css';
import { useSelector, useDispatch } from 'react-redux';
import { AllUser } from "../redux/auth/auth.action";
import {addPost,updatePost,deletePost,getPost} from "../redux/post/post.action"

export default function Home() {
    let user = JSON.parse(localStorage.getItem('user'))
    let data = useSelector(store => store.AuthReducer.data);
    let [msg, setMsg] = useState('')
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(AllUser())
    }, [])

    let AddPost = () => {
        let title="title blank";
        let likes = 0;
        let dislikes = 0;
        let obj={msg, title,likes,dislikes}
        console.log(obj)
     dispatch(addPost(obj))
    }
    console.log(user)
    return (
        <>
            <input />
            <hr />
            <div>
                {data[0] ? <div className="dash">
                    {data.map((el) => {
                        return (
                            <div key={el._id}>
                                <p>name : {el.name}</p>
                                <p>email : {el.email}</p>
                                <button>follow</button>
                                <br />
                            </div>
                        )
                    })}
                </div> : ""}
            </div>
            <div className="total">
                <div className="detail">
                    <h2>{user.username}</h2>
                    <h6>name : {user.name}</h6>
                    <h6>email : {user.email}</h6>
                    <h6>place : {user.location}</h6>
                    <h6>number : {user.number}</h6>
                    <button>edit detail</button>
                </div>
                <div className="dashboard">
                    <div className="addPost">
                    <input placeholder="write your msg" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                    <button onClick={AddPost}>add</button>
                    </div>
                    <hr/>
                    <div className="showPost">
                       
                    </div>
                </div>
            </div>
        </>
    )
}