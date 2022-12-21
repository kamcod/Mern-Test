 import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { dashboardActions } from "../../store/dashboardSlice";
import { useNavigate } from 'react-router-dom';
 import AppConfig from "../../utils/AppConfig";
  import axios from 'axios';

const Dashboard = () =>{
  const counter = useSelector(state => state.dashboard.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const logout = () => {
      console.log("logout function pending")
      axios.delete(AppConfig.apis.logoutUser)
          .then(res => {
              if(res.status === 200){
                  console.log("logout user successfully")
                  navigate("/login", { replace: true });
              }
          })
          .catch((err) => {
              console.log("error")
          })
  }

  useEffect(() => {
      axios.defaults.withCredentials = true;
      axios.get(AppConfig.apis.getDashboardStats)
          .then(res => {
            if(res.status === 200){
              setIsLoading(false);
              setUser(res.data.name);
            }
          })
          .catch((err) => {
            setIsLoading(false);
            console.log("error")
          })
  }, []);

  return(
    <div>
      {isLoading && <p>Loading......</p>}
      {!isLoading && <>
        <h1>Dashboard</h1>
        <h4>Hello! {user}</h4>





          <br/><br /><br/><br />

          <button onClick={logout}>Log out</button>








          <br/><br /><br/><br /><br/><br /><br/><br /><br/><br /><br/><br /><br/><br /><br/><br />
        <h3>Testing redux - e.g. Counter</h3>
        count: {counter}
        <br />
        <button onClick={() => dispatch(dashboardActions.increment(1))}>+1</button>
        <button onClick={() => dispatch(dashboardActions.decrement(1))}>-1</button>
        <button onClick={() => dispatch(dashboardActions.increment(2))}>+2</button>
        <button onClick={() => dispatch(dashboardActions.decrement(2))}>-2</button>
        <button onClick={() => dispatch(dashboardActions.reset())}>Reset</button>
      </>}

    </div>
  )
}

 export default Dashboard
