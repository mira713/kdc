import './validation.css';
import { useNavigate } from 'react-router-dom';
import {axios} from 'axios';
import {useState, useEffect} from 'react';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import {postUser, AllUsers} from '../redux/auth/auth.action';

const initialState={
    name:"",
    email:"",
    phone:"",
    password:"",
    location:"",
    userName:""
}

const ValidationForm = () => {
    const [fields, setFields] = useState(initialState);
    const [Load, setLoad] = useState(false);
    const navigate = useNavigate();
    // let loading =  useSelector(store=>store.AuthReducer.isAuthLoading);
    // let authenticated = useSelector(store=>store.AuthenReducer.isAuth);
    const dispatch = useDispatch();

    const onSubmit=(e)=>{
        e.preventDefault();

        setLoad(true)
        let names = fields.name;
        let num = fields.phone;
        let email = fields.email;
        let password = fields.password;
        let location = fields.location;
        let useName = fields.userName;

        if(password.length<=5){
            alert("password must be of 6 letter")
        }

        let obj = {names,num,email,password,location, useName};
        dispatch(postUser(obj).then(r=>{
            console.log(r.payload)
            if(r.payload.email){
                setLoad(false);
                navigate('/');
                alert('go to login')
            }else{
                setLoad(false);
                alert('something went wrong')
            }
        }))
        setFields(initialState);
    }
    
    let handleChange=(e)=>{
    const {name,value} = e.target;
    setFields({...fields,[name]:value})
    }

    return(
        <div className="validation_form">
            <form className='myForm' noValidate autoComplete='off' onSubmit={onSubmit}>
                <p className='title_validation'>
                    <label>Name
                        <br/>
                        <input className='validation_input' type="text" name="name" value={fields.name} onChange={handleChange}/>
                    </label>
                </p>
                <p className='title_validation'>
                    <label>Email
                        <br/>
                        <input className='validation_input' type="text" name="email" value={fields.email} onChange={handleChange}/>
                    </label>
                </p>
                <p className='title_validation'>
                    <label>Password
                        <br/>
                        <input className='validation_input' type="text" name="password" value={fields.password} onChange={handleChange}/>
                    </label>
                </p>
                <p className='title_validation'>
                    <label>
                        <br/>
                        <input className='validation_input' type="text" name="name" value={fields.name} onChange={handleChange}/>
                    </label>
                </p>
                <p className='title_validation'>
                    <label>Phone 
                        <br/>
                        <input className='validation_input' type="number" name="phone" value={fields.phone} onChange={handleChange}/>
                    </label>
                </p>
                <p className='title_validation'>
                    <label>Location
                        <br/>
                        <input className='validation_input' type="text" name="location" value={fields.location} onChange={handleChange}/>
                    </label>
                </p>
                <p className='title_validation'>
                    <label>userName
                        <br/>
                        <input className='validation_input' type="text" name="userName" value={fields.userName} onChange={handleChange}/>
                    </label>
                </p>
                <button className='signup_continue' type="submit">
                     Create An Account
                </button>
            </form>
        </div>
    )
}

export default ValidationForm