import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik, Form, Field } from "formik";
import { AddNewUser } from "../API/users";
import '../App.css'

const RegisterUser = () => {
  const mutation = useMutation({
    mutationFn: (newUser) => AddNewUser(newUser),
  });

  function submit(values) {
    console.log(values);
    // mutation.mutate(values);
  }

  return (
    <div className="registerMain"> {/* Main Rigister page div*/}
      
      <div > {/* Picture div*/}
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-d45bTo0TcWGLAOTK2jIBu8u-DHjzwy1EjE7M-xeGLdZj9ug5uePlwsesspxMQatLGo&usqp=CAU" className="bank-logo" alt="rigister Logo" />
      </div>

      <div> {/* Formik and rigister div*/}
        <Formik
          initialValues={{ username: "", image: "", password: "" }}
          onSubmit={submit}
        >
          <Form>
            <div >
              <div >
                <h4>Name</h4>
                <Field as="input" name="username" type="text" />
              </div>
              <div>
                <h4>Image</h4>
                <Field as="input" name="image" type="text" />
              </div>
              <div>
                <h4>Password</h4>
                <Field as="input" name="password" type="password" />
              </div>

              <button class="button" type="submit">Register</button>
            </div>
          </Form>
        </Formik>
      </div>

    </div>
  );
};

export default RegisterUser;