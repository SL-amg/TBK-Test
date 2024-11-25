import React from "react";
import Home from "./Home";
import RegisterUser from "./RegisterUser";
import LoginUser from "./LoginUser";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Register">Register</NavLink>
      <NavLink to="/Login">Login</NavLink>
    </nav>
  );
};

export default NavBar;