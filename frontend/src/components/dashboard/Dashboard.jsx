 import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dashboardActions } from "../../store/dashboardSlice";
//  import axios from 'axios';

const Dashboard = () =>{
  const counter = useSelector(state => state.dashboard.counter);
  const dispatch = useDispatch();

  useEffect(()=>{
      // axios.get('http://localhost:5000/app/test')
      //     .then(res => {
      //         setUser(res.data.name);
      //     })
  }, []);

  return(
    <div>
      <h1>Dashboard</h1>
      <h4>Hello!</h4>
        <br/>






        <h3>Testing redux - e.g. Counter</h3>
        count: {counter}
        <br />
        <button onClick={() => dispatch(dashboardActions.increment(1))}>+1</button>
        <button onClick={() => dispatch(dashboardActions.decrement(1))}>-1</button>
        <button onClick={() => dispatch(dashboardActions.increment(2))}>+2</button>
        <button onClick={() => dispatch(dashboardActions.decrement(2))}>-2</button>
        <button onClick={() => dispatch(dashboardActions.reset())}>Reset</button>
    </div>
  )
}

 export default Dashboard
