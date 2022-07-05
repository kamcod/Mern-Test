 import { useState } from "react";
 import classes from "./signup.module.css";

const SignUp = () =>{
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePasswd = (e) => {
    setPassword(e.target.value)
  }
  return(
    <div>
      <div className={classes.title}>
      <h1> Welcome to Blog City</h1>
      <p>Join <b>Blog city</b> - easy to use and userfriendly <br />
       Post your writeups, blogs or research to serve community. </p>
      </div>

    <div className={classes.main}>
      <div className={classes.sidebar}>
      </div>
      <div className={classes.formBar}>
      <h2>Create A New Account</h2>
      <form className={classes.form}>
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
      Already have an account? <a href="#">login</a> here
      </div>
    </div>
    </div>
  )
}

 export default SignUp