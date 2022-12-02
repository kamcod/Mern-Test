import { useState } from "react";
import { Link } from "react-router-dom";
 import classes from "./Login.module.css";

const Login = () =>{
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePasswd = (e) => {
    setPassword(e.target.value)
  }
  return(
    <div>
      <div className={classes.title}>
      <h1> Welcome to The Blog City</h1>
      </div>
    <div className={classes.main}>
      <div className={classes.sidebar}>
      </div>
      <div className={classes.formBar}>
        <h2>Sign In</h2>
      <form className={classes.form}>

        <label htmlFor="email">Email: </label> <br />
        <input type="text" id="email" name="email" value={email} onChange={onChangeEmail} />
        <br /> <br />
        <label htmlFor="passwd">Password: </label> <br />
        <input type="password" id="passwd" name="password" value={password} onChange={onChangePasswd} />
        <br /> <br />
        <button type="submit"> Login </button>
      </form>
      <br />
      Don't have an account? Click here to <Link to='/register'>register</Link>
      </div>
    </div>
    </div>
  )
}

 export default Login
