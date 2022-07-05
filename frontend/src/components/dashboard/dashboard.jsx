 import { useEffect } from "react";
import { useState } from "react"

const Dashboard = () =>{
  const [user, setUser] = useState();

  useEffect(()=>{
    setUser('Dummy User');
  }, []);

  return(
    <div>
      <h1>Dashboard</h1>
      <h4>Hello, {user}</h4>
    </div>
  )
}

 export default Dashboard