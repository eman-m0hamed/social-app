
import './userProfile.css'

//fack apis............
import CurrentUserData from '../../FackApis/CurrentUserData'
import { Link } from 'react-router-dom'
//FontAwesomeIcon.........
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeed, faLink, faMessage } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios';

function UserProfile() {

  let [user, setUser] = useState({});
  let token = localStorage.getItem("token");
  let headers = {
    Authorization: "Bearer " + token,
  };

  useEffect(()=>{
    axios
      .get("https://proj.nozoluna.com/api/user/my_profile_page", { headers })
      .then((response) => {
        console.log(response);
        setUser(response.data.data[0].user);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <div className="UserProfile">
      <div className="cover-photos">
        <img src={CurrentUserData.map((user) => user.CoverPhoto)} alt="" />
      </div>
      <div className="profile-info">
        <img
          src={"https://proj.nozoluna.com/public/dash/assets/img/" + user.image}
          alt=""
          style={{ backgroundColor: "#c1bebebf" }}
        />
        <div className="user-name">
          <h3>{user.name} </h3>
        </div>
        <div className="profile-button">
          <Link to="/chatbox/id">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faMessage} />
            </button>
          </Link>
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faFeed} /> Follow Me
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faLink} /> Follow Me
          </button>
        </div>
        <p className="bio">
          Self-confidence and encouragement is not about believing that everyone
          will like me, but rather about making sure that people’s admiration
          does not affect me. Life loves us all, so we must love it too.
          Self-confidence is the underlying feeling we have that results from
          great achievement in...
        </p>
      </div>
    </div>
  );
}

export default UserProfile