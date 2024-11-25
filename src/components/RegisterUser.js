import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik, Form, Field } from "formik";
import { AddNewUser } from "../API/users";

const RegisterUser = () => {
  const mutation = useMutation({
    mutationFn: (newUser) => AddNewUser(newUser),
  });

  function submit(values) {
    console.log(values);
    // mutation.mutate(values);
  }

  return (
    <div>
      <Formik
        initialValues={{ username: "", image: "", password: "" }}
        onSubmit={submit}
      >
        <Form>
          <Field as="input" name="username" type="text" />
          <Field as="input" name="image" type="text" />
          <Field as="input" name="password" type="password" />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterUser;