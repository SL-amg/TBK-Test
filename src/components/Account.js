import React, { useState } from "react";
import { getProfile, putDeposit } from "../API/users";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik, Field, Form } from "formik";

const Account = () => {
  const { data } = useQuery({
    queryKey: ["profiles"],
    queryFn: getProfile,
  });

  const mutation = useMutation({
    mutationFn: putDeposit,
    mutationKey: ["money"],
  });
  function submit(values) {
    mutation.mutate(values);
  }
  // console.log(addMoney);

  return (
    <div>
      <div>
        Your Balance is:
        <h2>{data?.balance}</h2>
      </div>

      <div>
        Amount to be Deposited
        <Formik initialValues={{ amount: "" }} onSubmit={submit}>
          <Form>
            <Field
              placeholder="Deposit Amount"
              className="barStyle"
              as="input"
              name="amount"
              type="number"
            />
            <button type="submit">Deposit</button>
          </Form>
        </Formik>
      </div>



    </div>
  );
};

export default Account;