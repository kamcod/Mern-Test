 import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
 import classes from "./SignUp.module.css";
 import AppConfig from "../../../utils/AppConfig";
 import axios from "axios";

const SignUp = () =>{
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 useEffect(() => {
     axios.get('http://localhost:5000/app/test', {
             withCredentials: true,
             })
         .then(res => {
             console.log("res test", res);
         })
 }, [])
  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePasswd = (e) => {
    setPassword(e.target.value)
  }
  const registerUser = (event) => {
    event.preventDefault();
    axios.post(AppConfig.apis.registerUser, {
      name: username,
      email,
      password
    })
        .then(res => {
            if(res.status === 201) {
              navigate("/login", { replace: true });
            }
        })
  }

  return(
    <div>
      <div className={classes.title}>
      <h1> Welcome to The Blog City</h1>
      <p>Join <b>Blog city</b> - easy to use and user friendly <br />
       Post your write ups, blogs or research to serve community. </p>
      </div>

    <div className={classes.main}>
      <div className={classes.sidebar}>
      </div>
      <div className={classes.formBar}>
      <h2>Create A New Account</h2>
      <form className={classes.form} onSubmit={registerUser} method="post">
        <label htmlFor="name">Name: </label> <br />
        <input type="text" id="name" name="name" value={username} maxLength="20" onChange={onChangeUsername} />
        <br /> <br />
        <label htmlFor="email">Email: </label> <br />
        <input type="text" id="email" name="email" value={email} onChange={onChangeEmail} />
        <br /> <br />
        <label htmlFor="passwd">New Password: </label> <br />
        <input type="password" id="passwd" name="password" value={password} onChange={onChangePasswd} />
        <br /> <br />
        <button type="submit"> Register </button>
      </form>
      <br />
      Already have an account? <Link to='/login'>Login</Link> here
      </div>
    </div>
    </div>
  )
}

 export default SignUp
