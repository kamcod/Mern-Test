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
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([])

    const getAllPosts = () => {
        axios.get(AppConfig.apis.posts)
            .then(res => {
                if(res.status === 200){
                    setPosts(res.data.post);
                    console.log('res posts ",', res.data.post)
                }
            })
            .catch((err) => {
                console.log("error")
            })
    }
  const logout = () => {
      axios.delete(AppConfig.apis.logoutUser)
          .then(res => {
              if(res.status === 200){
                  navigate("/login", { replace: true });
              }
          })
          .catch((err) => {
              console.log("error")
          })
  }
  const createPost = () => {
      axios.post(AppConfig.apis.posts, {
          title,
          description
      })
          .then(res => {
              if(res.status === 201){
                  console.log("post created successfully")
                  getAllPosts();
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
      getAllPosts();
  }, []);

  return(
    <div>
      {isLoading && <p>Loading......</p>}
      {!isLoading && <>
        <h1>Dashboard</h1>
        <h4>Hello! {user}</h4>

          <br/><br /><br/><br />

          <button onClick={logout}>Log out</button>
          <hr />
          <br />

          <label>Title</label> <br/>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/> <br />
          <label>Description</label> <br/>
          <textarea rows="4" cols="40" value={description} onChange={(e) => setDescription(e.target.value)}></textarea> <br />
          <button onClick={createPost}>Create Post</button>

          <hr />
          <br />
          <h2> Your Posts </h2>

          {posts?.map(post => {
              return(
                  <>
                      <div><b>{post.title}</b></div>
                      <div>{post.description}</div>
                      <hr width="90%" />
                  </>
                  )

          })}






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
