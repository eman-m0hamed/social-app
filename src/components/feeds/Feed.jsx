/* eslint-disable react/prop-types */
import "./feeds.css";
import { Link } from "react-router-dom";
// Comments .........
//import CommetData from '../../FackApis/CommetData'
//import CurrentUserData from '../../FackApis/CurrentUserData'
import Comments from "../comments/Comments";
import getTime from "../../assets/getTime";
//FontAwesomeIcon......
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faListDots,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";



function Feed({ fed }) {
  let [openCommet, setOpenComment] = useState(false);
  const CommentHandeler = () => {
    setOpenComment(!openCommet);
  };

  return (
    <div className="feed" key={fed.id}>
      <div className="top-content">
        <Link to="/profile/id">
          <div className="user">
            {fed?.user?.image && <img src={"https://proj.nozoluna.com/public/dash/assets/img/" + fed.user.image} alt="" />}
            <div>
              <h5>{fed.user.name}</h5>
              <small>{getTime(fed.created_at)}</small>
            </div>
          </div>
        </Link>
        <span>
          <FontAwesomeIcon icon={faListDots} />
        </span>
      </div>
      <div className="mid-content">
        <p>{fed.text}</p>
        {fed.file && (
          <img
            src={
              "https://proj.nozoluna.com/public/dash/assets/img/" +
              fed.file
            }
            alt=""
          />
        )}
      </div>
      <div className="bottom-content">
        <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faHeart} />
            14 Like
          </span>
        </div>
        <div className="action-item" onClick={CommentHandeler}>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {fed.comments.length} Comment
          </span>
        </div>
        <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faShare} />1 Share
          </span>
        </div>
      </div>
      {openCommet && <Comments fed={fed} setOpenComment= {setOpenComment} />}
    </div>
  );
}

export default Feed;
