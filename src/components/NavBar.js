import React from "react";
import Home from "./Home";
import RegisterUser from "./RegisterUser";
import LoginUser from "./LoginUser";
import { NavLink } from "react-router-dom";
import '../App.css'

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='bankName'>
                <img src="https://media1.giphy.com/avatars/Ozow/FusZsQuJoSz7.gif" className="bank-logo" alt="bank Logo" />
                <h1>
                    TBK Total Bank of Kuwait
                </h1>
            </div>
            <nav>
                <NavLink to="/">
                    <button class="button"> Home
                    </button>
                </NavLink>
                <NavLink to="/Register">
                    <button class="button"> Register
                    </button>
                </NavLink>
                <NavLink to="/Login">
                    <button class="button"> Log-In
                    </button>
                </NavLink>
            </nav>
        </div>

    );
};

export default NavBar;