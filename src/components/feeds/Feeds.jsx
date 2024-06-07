import './feeds.css'


 // COMPONENTS.................
import Feed from './Feed'
import HomeFeedData from '../../FackApis/HomeFeedData'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Feeds() {

  let [feeds, setFeeds]= useState([]);

  useEffect(()=>{
    let token = localStorage.getItem("token");
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };
    axios
      .get("https://proj.nozoluna.com/api/user/posts",{
        headers,
      })
      .then((response) => {
        console.log(response);
        setFeeds(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <div className='feeds'>
    {
        feeds.map(fed=>(
       <Feed fed={fed} key={fed.key}/>
        ))
    }
    </div>
  )
}

export default Feeds