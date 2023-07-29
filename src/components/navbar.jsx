import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'

const Navbar = () => {

    let isAuth = localStorage.getItem('isAuth')
    let [home,setHome] = useState(false);
    let [post, setPost] = useState(false);
let [auth, setAuth] = useState(isAuth);
let navigate = useNavigate()

    let logout=()=>{
        localStorage.removeItem("isAuth")
        localStorage.removeItem('token')
        localStorage.removeItem('user');
        setAuth(false)
        window.location.reload()
    }

   
  return (
    <div className='navbar'>
        <div className="nav">Navbar</div>
        <div className="page">
            <div className="userPost" id={home?"active":''} onClick={()=>{navigate('/');setHome(true);setPost(false)}}>home</div>
            <div className="allPost" id={post?"active":""} onClick={()=>{navigate('/allPosts');setHome(false);setPost(true)}}>all posts</div>
        </div>
        <button style={{_hover:{cursor:"pointer"}}} onClick={logout}>{auth?"Logout":"Login"}</button>
    </div>
  )
}

export default Navbar