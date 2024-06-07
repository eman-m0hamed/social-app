import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Logout(){
      let navigate = useNavigate();
    useEffect(()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('image');
        localStorage.removeItem('id');

        navigate("/login");
    },[])
    return(
        <>
        </>
    );
}