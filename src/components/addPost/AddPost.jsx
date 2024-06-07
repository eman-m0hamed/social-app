import "./addPost.css";

import CurrentUserData from "../../FackApis/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSmile,
  faTags,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";

function AddPost() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formValue, setFormValues] = useState({
    text: "",
    file: "",
  });

  const handleSubmit = async (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("text", formValue.text);
        formDataToSend.append("file", formValue.file);
        let token = localStorage.getItem("token");
        let headers ={
          'Authorization': 'Bearer ' + token
        }
        axios.post(
          "https://proj.nozoluna.com/api/user/add_post",
          formDataToSend,
          { headers }
        ).then((response)=>{console.log(response);
          setSuccess(response.data.data);
           window.location.reload();
        })
        .catch((error)=>{console.log(error);

        })
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

  return (
    <>
      <form
        className="postForm"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "blue" }}>{success}</p>}

        <div className="user form-top">
          <img src={"https://proj.nozoluna.com/public/dash/assets/img/"+localStorage.getItem('image')} alt="" />
          <input
            type="text"
            placeholder="what's on your mind ?"
            required
            name="text"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
        <div className="post-categories">
          <label htmlFor="file">
            <input type="file" id="file" name="file" onChange={handleChange} />
            <span>
              <FontAwesomeIcon icon={faImage} />
              faImage
            </span>
          </label>
          <label htmlFor="file">
            <input type="file" id="file" name="file" onChange={handleChange} />
            <span>
              <FontAwesomeIcon icon={faVideo} />
              faVideo
            </span>
          </label>
          <span>
            <FontAwesomeIcon icon={faTags} />
            faTags
          </span>
          <span>
            <FontAwesomeIcon icon={faSmile} />
            faSmile
          </span>
        </div>
      </form>
    </>
  );
}

export default AddPost;
