import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppConfig from '../../utils/AppConfig';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const logout = () => {
    axios.delete(AppConfig.apis.logoutAdmin)
        .then(res => {
            if(res.status === 200){
                navigate("/admin", { replace: true });
            }
        })
        .catch((err) => {
            console.log("error", err)
        })
}

useEffect(() => {
  axios.get(AppConfig.apis.getAllUsers)
        .then(res => {
            if(res.status === 200){
              setUsers(res.data.users);
            }
        })
        .catch((err) => {
            console.log("error", err)
        })
}, []);
  return(
    <>
    <h1> Admin Dashboard</h1>
    <span><button onClick={logout}>logout</button></span>

    <br /> <br /><br /><br /> <br />

    <b>total users: </b>
    <span><b>{users.length}</b></span>
    <hr />
    <br />
    {users?.map((user, index) => {
      return (
        <>
          <span>{index+1}</span> <span>{user.name}</span> 
          {user.isAdmin && <span style={{color: "green"}}>{` (Admin)`}</span>}
          <br />
        </>
      )
    })}
    </>

  );
}