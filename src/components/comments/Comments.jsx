import './comments.css'
//Facke Api................
import CommetData from '../../FackApis/CommetData'
import CurrentUserData from '../../FackApis/CurrentUserData'
import { Link} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from 'react'
import getTime from "../../assets/getTime";
function Comments({ fed, setOpenComment }) {

  const [formValue, setFormValues] = useState({
    post_id: "",
    comment: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("post_id", formValue.post_id);
    formDataToSend.append("comment", formValue.comment);
    let token = localStorage.getItem("token");
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };
    axios
      .post("https://proj.nozoluna.com/api/user/add_comment", formDataToSend, {
        headers,
      })
      .then((response) => {
        console.log(response);
         window.location.reload();
        setOpenComment(false);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormValues({
        ...formValue,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormValues({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(()=>{
    setFormValues({
      post_id: fed.id,
      comment: ""
    })

    console.log(fed);
  },[])
  return (
    <div className="comments">
      <div className="writebox">
        <form className="user" onSubmit={handleSubmit}>
          <img
            src={
              "https://proj.nozoluna.com/public/dash/assets/img/" +
              localStorage.getItem("image")
            }
            alt=""
          />
          <input
            type="hidden"
            name="post_id"
            defaultValue={fed.id}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Write a comment"
            required
            name="comment"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            send
          </button>
        </form>
      </div>
      {fed?.comments?.map((Comment) => (
        // eslint-disable-next-line react/jsx-key
        <Link to="/profile/id">
          <div className="user" key={Comment.id}>
            <img
              src={
                "https://proj.nozoluna.com/public/dash/assets/img/" +
                Comment.user.image
              }
              alt=""
            />
            <div>
              <div>
                <h5 style={{ display: "inline-block" }}>{Comment.user.name}</h5>{" "}
                <small>{getTime(Comment.created_at)}</small>
              </div>
              <p>{Comment.comment}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Comments