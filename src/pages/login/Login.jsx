/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./login.css";
import Mom from "../../assets/img/Mom.jpg";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [formValue, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    setError("");
    const form = e.currentTarget;
    e.preventDefault();
   
        const formDataToSend = new FormData();
        formDataToSend.append("email", formValue.email);
        formDataToSend.append("password", formValue.password);

        axios
          .post("https://proj.nozoluna.com/api/log_user", formDataToSend)
          .then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.api_token);
            localStorage.setItem('name', response.data.data.name);
            localStorage.setItem('id', response.data.data.id);
            localStorage.setItem('image', response.data.data.image);
            navigate("/");
          })
          .catch((responseError) => {
            console.log(responseError);
            setError(responseError.response?.data?.data);
          });
    
    
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };


  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/');
    }
  }, [])
  return (
    <>
      <div className="login">
        <div className="card">
          <div className="left">
            <h2>
              -<br></br>FAMILY_PLAZA Login<br></br>-
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque, ut cupiditate? Consectetur ratione beatae ipsum rerum
              delectus qui nam eligendi eum vel facere aut provident dolorem
              officiis, exercitationem, voluptates reprehenderit?
            </p>
            <span>Don't Have An Account?</span>
            <Link to="/signup">
              <button className="btn btn-primary">Register</button>
            </Link>
          </div>
          <form className="right" onSubmit={handleSubmit}>
            <input
              type="text"
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

            {error && (
              <p style={{ color:'red' }}>{error}</p>
            )}

            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
        <div className="tme">
          <img src={Mom} alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
