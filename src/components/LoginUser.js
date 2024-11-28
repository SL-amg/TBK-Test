import React from "react";
// ---------------------------------------------
import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik, Form, Field } from "formik";
import { Login } from "../API/users";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import imagetower from '/Users/slamg/Desktop/Development/Bankprojecthistory /tbktest/src/images/kutowers.jpg'

const LoginUser = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newUser) => Login(newUser),
    onSuccess: () => {
      navigate("/account");
    },
  });

  function submit(values) {
    console.log(values);
    mutation.mutate(values);
  }

  return (
    <div className="">
      {/* Main Rigister page div*/}
      <div className="loginImageDiv " >

        {/* Picture div*/}
        <img
          src={imagetower}
          className="loginImage"
          alt="rigister Logo"
        />
      </div>

<div className="loginMain">
      <div className="loginInputDiv">
      <h1>Login Your Account</h1>
      <div>
        if you don't have an account, Register
        <NavLink to="/register">here</NavLink>
      </div>
      <Formik initialValues={{ username: "", password: "" }} onSubmit={submit}>
        <Form>
        <h4>Username</h4>
          <Field
            as="input"
            name="username"
            type="text"
            placeholder="Username"
             className="barStyle"
          />
          <h4>Password</h4>
          <Field
            as="input"
            name="password"
            type="password"
            placeholder="Password"
             className="barStyle"
          />
          <button className="button" type="submit">Login</button>
        </Form>
      </Formik>
      </div>

    </div>
    </div>
    
  );
};

export default LoginUser;