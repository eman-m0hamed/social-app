/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../../pages/home/Home";
import ChatBox from "../../pages/chatbox/ChatBox";
import Profile from "../..//pages/profile/Profile";
import Nav from "../../components/nav/Nav";
import LeftBar from "../../components/leftbar/LeftBar";
import RightBar from "../../components/rightbar/RightBar";
import IsLogin from "./IsLogin";
import Logout from "../../components/Logout/Logout";

//import Login from '../../pages/login/Login.jsx'
const LayOut = () => {
  //feed
  const Feed = () => {
    return (
      <>
        <IsLogin>
          <Nav />
          <main>
            <LeftBar />
            <div className="contain">
              <Outlet />
            </div>
            <RightBar />
          </main>
        </IsLogin>
      </>
    );
  };

  //router
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/",
      element: <Feed />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/chatbox/:id",
          element: <ChatBox />,
        },
      ],
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default LayOut;
