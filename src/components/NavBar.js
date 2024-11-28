import React from "react";
import Home from "./Home";
import RegisterUser from "./RegisterUser";
import LoginUser from "./LoginUser";
import { NavLink } from "react-router-dom";
import "../App.css";
import image from '../images/tbkbank.png'

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="bankName">
        <img
          src={image}
          className="bank-logo"
          alt="bank Logo"
        />
        <h1>Total Bank of Kuwait</h1>
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