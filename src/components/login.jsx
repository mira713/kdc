import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/auth.action"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Load, setload] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authenticated = useSelector(store=>store.AuthReducer.isAuth);
  const token = useSelector(store=>store.AuthReducer.token);

  const handleLogin = (event) => {
    setload(true)
    event.preventDefault();
   let obj = {email:email,password:password}
    if (email !== "" && password !== "") {
           
      dispatch(loginUser(obj)).then(r=>{
        if(localStorage.getItem("token")){
          localStorage.setItem('user',JSON.stringify(r.payload.user))
          setload(false)
          alert('logged in')
          navigate('/')
        }else
        if(r.payload.msg) {
          localStorage.setItem('token',r.payload.token)
          setload(false)
          alert('logged in')
          navigate('/')
          
          } else {
            setload(false)
            alert('login failed')
            console.log('failed',r.payload)
              
          }
      })
   
    }
    setEmail('');
    setPassword('')
  };

  return (
    <div className="login_parent">
      {/* {Load ? (
        <Loading />
      ) : ( */}
      <div className="existing_and_new_users">
        <div className="existing_customer">
          <p className="existing_user_tag">Existing Customers</p>

          <div className="login_form">
            <form onSubmit={handleLogin}>
              {/* For email */}
              <p>
                <label>
                  * Email address
                  <br />
                  <input
                    className="input_login"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                  />
                </label>
              </p>

              {/* Form password */}
              <p>
                <label>
                  * Password
                  <br />
                  <input
                    className="input_login"
                    type="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </label>
              </p>

              <p className="forgot_password">FORGOTTEN YOUR PASSWORD?</p>

              <p>
                <button className="login_button">
                  {Load?<p>LOOKING FOR CREDENTIALS...</p>:<p>LOGIN TO YOUR ACCOUNT</p>}
                </button>
              </p>
            </form>
          </div>
        </div>

        <div className="new_customers">
          <p className="new_customes_tag">New Customers</p>
          <Link to="/register">
            <button className="continue_to_register">CONTINUE</button>
          </Link>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default Login;
