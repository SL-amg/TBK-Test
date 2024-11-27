import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProfileNavBar from "./components/ProfileNavBar";
import Profile from "./components/Profile";
import Transactions from "./components/Transactions";
import UsersList from "./components/UsersList";
import Account from "./components/Account";


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/Register",
    element: (
      <>
        <NavBar />
        <RegisterUser />
      </>
    ),
  },
  {
    path: "/Login",
    element: (
      <>
        <NavBar />
        <LoginUser />
      </>
    ),
  },

  {
    path: "/account",
    element: (
      <>
        <ProfileNavBar />
        <Account />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <ProfileNavBar />
        <Profile />
      </>
    ),
  },
  {
    path: "/transactions",
    element: (
      <>
        <ProfileNavBar />
        <Transactions />
      </>
    ),
  },
  {
    path: "/userslist",
    element: (
      <>
        <ProfileNavBar />
        <UsersList />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();