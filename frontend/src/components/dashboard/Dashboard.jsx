 import { useEffect, useState } from "react";
import axios from 'axios';

const Dashboard = () =>{
  const [user, setUser] = useState('');

  useEffect(()=>{
      axios.get('http://localhost:5000/app/test')
          .then(res => {
              setUser(res.data.name);
          })
  }, []);

  return(
    <div>
      <h1>Dashboard</h1>
      <h4>Hello, {user}</h4>
    </div>
  )
}

 export default Dashboard
