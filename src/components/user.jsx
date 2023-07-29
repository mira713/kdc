import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {updateAuth,loginUser} from "../redux/auth/auth.action";

const User = ({ user }) => {
let dispatch = useDispatch();
let [ isModalOpen, setIsModalOpen] = useState(false);
let [field, setField] = useState({
    _id:user._id,
    name:user.name,
    email:user.email,
    username:user.username,
    location:user.location,
    password:user.password,
    number:user.number,
    follow:user.follow,
});

let handleChange=(e)=>{
   let {name, value} = e.target;
   setField({...field, [name]:value})
}

let handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(updateAuth(field))
    closeModal()
    localStorage.setItem("user",JSON.stringify(field));
    window.location.reload()
}

let closeModal=()=>{
  setIsModalOpen(false)
}


    return (
        <div className="detail">
            <div className='singleUser'>
            <h2>{user.username}</h2>
            <img src="https://i.pravatar.cc/300" alt="user" style={{width:'25%'}}/>
            <h6>name : {user.name}</h6>
            <h6>email : {user.email}</h6>
            <h6>place : {user.location}</h6>
            <h6>number : {user.number}</h6>
            <button onClick={()=>setIsModalOpen(true)}>edit detail</button>
            </div>
            {isModalOpen && <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <h2>update detail</h2>
                    <p>Edit Your Details Here:</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name"value={field.name} onChange={(e)=>handleChange(e)}/>
                        <label htmlFor="text">User Name:</label>
                        <input type="text" id="username" name="username" value={field.username}onChange={(e)=>handleChange(e)}/>
                        <label htmlFor="email">location:</label>
                        <input type="text" id="location" name="location"value={field.location} onChange={(e)=>handleChange(e)}/>
                        <label htmlFor="name">Number:</label>
                        <input type="number" id="number" name="number" value={field.number}onChange={(e)=>handleChange(e)}/>
                        <button type="submit" onSubmit={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>}
        </div>
    )
}

export default User