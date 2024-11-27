import React from "react";
import Home from "./Home";
import RegisterUser from "./RegisterUser";
import LoginUser from "./LoginUser";
import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="bankName">
        <img
          src="https://media1.giphy.com/avatars/Ozow/FusZsQuJoSz7.gif"
          className="bank-logo"
          alt="bank Logo"
        />
        <h1>TBK Total Bank of Kuwait</h1>
      </div>
      <nav>
        <NavLink to="/">
          <button className="button"> Home</button>
        </NavLink>
        <NavLink to="/Register">
          <button className="button"> Register</button>
        </NavLink>
        <NavLink to="/Login">
          <button className="button"> Log-In</button>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;