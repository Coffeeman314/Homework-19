import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");

const Layout = () => {
  return (
    <>
      <div className="Header">
        <NavLink to="/Homework-19" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/Homework-19/posts" className={setActive}>
          Posts
        </NavLink>
        <NavLink to="/Homework-19/photos" className={setActive}>
          Photos
        </NavLink>
        <NavLink to="/Homework-19/contacts" className={setActive}>
          Contacts
        </NavLink>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
