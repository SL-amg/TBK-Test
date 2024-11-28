import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik, Form, Field } from "formik";
import { register } from "../API/users";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";
import imagemain from '../images/aliyonis.jpg'

const RegisterUser = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newUser) => register(newUser),
    onSuccess: () => {
      navigate("/account");
    },
  });

  function submit(values) {
    console.log(values);
    mutation.mutate(values);
  }

  return (
    <div className="registerMain">

      {/* Main Rigister page div*/}
      <div className="registerImageDiv " >

        {/* Picture div*/}
        <img
          src={imagemain}
          className="registerImage"
          alt="rigister Logo"
        />
      </div>

     {/* Register div*/}
      <div className="registerInputDiv">
        <h1>Register Your Account</h1>
        <div>
          if you have an account, Login
          <NavLink to="/login">here</NavLink>
        </div>
        <div>
          {/* Formik and rigister div*/}
          <Formik
            initialValues={{ username: "", image: "", password: "" }}
            onSubmit={submit}
          >
            <Form>
              <div>
                <div>
                  <h4>Name</h4>
                  <Field
                    placeholder="Name"
                    className="barStyle"
                    as="input"
                    name="username"
                    type="text"
                  />
                </div>
                <div>
                  <h4>Image</h4>
                  <Field
                    placeholder="Image Url"
                    className="barStyle"
                    as="input"
                    name="image"
                    type="text"
                  />
                </div>
                <div>
                  <h4>Password</h4>
                  <Field
                    placeholder="Password"
                    className="barStyle"
                    as="input"
                    name="password"
                    type="password"
                  />
                </div>

                <button className="button" type="submit">
                  Register
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;