/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import './Signup.css'
import Mom from '../../assets/img/Mom.jpg'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Signup = () => {

      let navigate = useNavigate();
      const [error, setError] = useState("");
      const [formValue, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        image: "",
      });

      const handleSubmit = async (e) => {
        setError("");
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity()) {
          const formDataToSend = new FormData();
          formDataToSend.append("name", formValue.name);
          formDataToSend.append("email", formValue.email);
          formDataToSend.append("password", formValue.password);
          formDataToSend.append("image", formValue.image);

          axios
            .post("https://proj.nozoluna.com/api/reg", formDataToSend)
            .then((response) => {
              console.log(response);
              localStorage.setItem("token", response.data.api_token);
              localStorage.setItem("name", response.data.data.name);
              localStorage.setItem("id", response.data.data.id);
              localStorage.setItem("image", response.data.data.image);
              navigate("/");
            })
            .catch((responseError) => {
              console.log(responseError);
              let res = responseError.response?.data?.data;
              if (typeof res === "string"){
                setError(res);
              }else{
                let message = "";
                for (const key in res) {
                 message += (res[key][0]+ "<br>");
                }
                 setError(message);
              }
            });
        }
        setValidated(true);
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

 useEffect(() => {
   if (localStorage.getItem("token")) {
     navigate("/");
   }
 }, []);
  return (
    <div className="Signup">
      <div className="card">
        <div className="left">
          <h2>
            -<br></br>FAMILY_PLAZA Signup<br></br>-
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, ut cupiditate? Consectetur ratione beatae ipsum rerum
            delectus qui nam eligendi eum vel facere aut provident dolorem
            officiis, exercitationem, voluptates reprehenderit?
          </p>
          <span>Don't Have An Account?</span>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
        <form
          className="right"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <input
            type="text"
            required
            placeholder="username"
            name="name"
            onChange={handleChange}
          />
          <input
            type="email"
            required
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            required
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <label htmlFor="image" style={{ color: "white", width: "90%" }}>
            Profile Image
          </label>
          <input
            id="image"
            type="file"
            required
            placeholder="profile image"
            name="image"
            onChange={handleChange}
          />

          {error && (
            <p
              style={{ color: "red", textAlign: "center", margin: "5px auto" }}
              dangerouslySetInnerHTML={{ __html: error }}
            />
          )}

          <button className="btn">Register</button>
        </form>
      </div>
      <div></div>
      <div className="tme">
        <img src={Mom} alt="" />
      </div>
    </div>
  );
}

export default Signup
