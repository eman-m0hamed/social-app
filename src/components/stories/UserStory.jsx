import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentUserData from "../../FackApis/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

function UserStory() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formValue, setFormValues] = useState({
    file: "",
  });

  useEffect(() => {
    if (formValue.file !== "") {
      handleSubmit();
    }
  }, [formValue.file]);

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    const formDataToSend = new FormData();
    formDataToSend.append("file", formValue.file);
    let token = localStorage.getItem("token");
    let headers = {
      Authorization: "Bearer " + token,
    };
    try {
      const response = await axios.post(
        "https://proj.nozoluna.com/api/user/add_story",
        formDataToSend,
        { headers }
      );
      console.log(response);
      setSuccess(response.data.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormValues({
        ...formValue,
        [e.target.name]: e.target.files[0],
      });
    }
  };

  return (
    <form
      className="story userStory"
      onSubmit={(e) => e.preventDefault()}
      encType="multipart/form-data"
    >
      <div className="user">
        <img src={"https://proj.nozoluna.com/public/dash/assets/img/"+localStorage.getItem('image')} alt="" />
      </div>
      <img src={CurrentUserData.map((user) => user.CoverPhoto)} alt="" />
      <label htmlFor="storyFiles">
        <FontAwesomeIcon icon={faAdd} />
        <input
          type="file"
          id="storyFiles"
          name="file"
          onChange={handleChange}
        />
      </label>
      <h6>Add Story</h6>
    </form>
  );
}

export default UserStory;
