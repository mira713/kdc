import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postUser ,AllUsers} from '../redux/auth/auth.action';

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    location:"",
    username:""
};

const ValidationForm = () => {
    const [fields, setFields] = useState(initialState);
    const [Load, setload] = useState(false);
    const navigate = useNavigate();
    let loading = useSelector(store => store.AuthReducer.isAuthLoading)
    let authenticated = useSelector(store => store.AuthReducer.isAuth)
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(fields)
       setload(true)
        let name = fields.firstName + " " + fields.lastName;
        let number = fields.phone;
        let email = fields.email;
        let password = fields.password;
        let location = fields.location;
        let username = fields.username;
        let follow = 0;

        if (password.length <= 5) {
            
            return alert('password must be of 6 letter')
        }
        if (
            fields.firstName == "" ||
            fields.lastName == "" ||
            fields.email == "" ||
            fields.phone == "" ||
            fields.password == ""||fields.location==""||fields.username==""
        ) {
            return alert('fill out all the neccessary fields')
        } else {
            let obj = { name, number, email, password , location, username,follow}
            dispatch(postUser(obj)).then(r=>{
                if (r.payload.email) {
                    setload(false)
                    navigate('/')
                    alert("go to login")
                    } else {
                        setload(false)
                        alert("Something went wrong")
                    }
            });
        }

        setFields(initialState)
    };


    return (
        <div className="validation_form">
            <form
                className="myForm"
                noValidate
                autoComplete="off"
                onSubmit={onSubmit}
            >
                {/* First Name */}
                <p className="title_validation">
                    <label>
                        * First Name
                        <br />
                        <input
                            className="validation_input"
                            type="text"
                            name="firstName"
                            value={fields.firstName}
                            onChange={handleChange}
                        />
                    </label>
                </p>

                {/* Last Name */}
                <p className="title_validation">
                    <label>
                        * Last Name
                        <br />
                        <input
                            className="validation_input"
                            type="text"
                            name="lastName"
                            value={fields.lastName}
                            onChange={handleChange}
                        />
                    </label>
                </p>
                <p className="title_validation">
                    <label>
                        UserName
                        <br />
                        <input
                            className="validation_input"
                            type="text"
                            name="username"
                            value={fields.username}
                            onChange={handleChange}
                        />
                    </label>
                </p>

                {/* Email Address */}
                <p className="title_validation">
                    <label>
                        * Email address
                        <br />
                        <input
                            className="validation_input"
                            type="email"
                            name="email"
                            value={fields.email}
                            onChange={handleChange}
                        />
                    </label>
                </p>

                {/* Phone Number */}
                <p className="title_validation">
                    <label>
                        * Cell Phone Number
                        <br />
                        <input
                            className="validation_input"
                            type="tel"
                            name="phone"
                            value={fields.phone}
                            onChange={handleChange}
                        />
                    </label>
                </p>
                <p className="title_validation">
                    <label>
                        * Location
                        <br />
                        <input
                            className="validation_input"
                            type="text"
                            name="location"
                            value={fields.location}
                            onChange={handleChange}
                        />
                    </label>
                </p>

                {/* Password */}
                <p className="title_validation">
                    <label>
                        * Password
                        <br />
                        <input
                            className="validation_input"
                            type="password"
                            name="password"
                            value={fields.password}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <p mt="5px" color="red" display={fields.password.length <= 5 ? "flex" : "none"} > Password must be 6 Letters</p>
                </p>

                <p>
                    <button className="signup_continue" type="submit">
                        {Load?<p>CREATING ACCOUNT</p>:<p>CREATE AN ACCOUNT</p>}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default ValidationForm;
