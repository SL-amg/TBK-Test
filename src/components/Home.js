import React from "react";
import { Navigate } from "react-router-dom";
import Account from "./Account";
import { checkToken } from "../API/storage";

const Home = () => {
  if (!checkToken()) {
    return <Navigate to="/login" />;
  }

  return <Navigate to="/account" />;
};

export default Home;