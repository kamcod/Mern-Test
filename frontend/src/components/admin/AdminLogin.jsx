import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 import classes from "../register/login/Login.module.css";
import axios from "axios";
import AppConfig from "../../utils/AppConfig";

const AdminLogin = () =>{
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePasswd = (e) => {
    setPassword(e.target.value)
  }
  const loginUser = (e) => {
    e.preventDefault();
      axios.defaults.withCredentials = true;
    axios.post(AppConfig.apis.adminLogin, {
      email,
      password
    })
        .then(res => {
          if(res.status === 200) {
            navigate("/admin/dashboard", { replace: true });
          }
        })
        .catch(err => {
          console.log("error", err);
        })
  }
  return(
    <div>
      <div className={classes.title}>
      <h1> Blog City</h1>
      </div>
    <div className={classes.main}>
      <div className={classes.sidebar}>
      </div>
      <div className={classes.formBar}>
        <h2>Admin Login</h2>
      <form className={classes.form} onSubmit={loginUser}>

        <label htmlFor="email">Email: </label> <br />
        <input type="text" id="email" name="email" value={email} onChange={onChangeEmail} />
        <br /> <br />
        <label htmlFor="passwd">Password: </label> <br />
        <input type="password" id="passwd" name="password" value={password} onChange={onChangePasswd} />
        <br /> <br />
        <button type="submit"> Login </button>
      </form>
      </div>
    </div>
    </div>
  )
}

 export default AdminLogin
