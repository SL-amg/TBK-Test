import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import { deleteToken } from "../API/storage";
import image from '../images/tbkbank.png'

const ProfileNavBar = () => {

  const navigate = useNavigate();
  const logout = () => {
    deleteToken();
    localStorage.removeItem("user");
    navigate("/login");
  };

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
        <NavLink to="/account">
          <button className="button"> Account</button>
        </NavLink>
        <NavLink to="/profile">
          <button className="button"> profile</button>
        </NavLink>
        <NavLink to="/transactions">
          <button className="button"> Transactions</button>
        </NavLink>
        <NavLink to="/userslist">
          <button className="button"> Users</button>
        </NavLink>
        <button className="button" onClick={logout}> Logout</button>
      </nav>

    </div>
  );
};

export default ProfileNavBar;