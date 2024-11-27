import React, { useState } from "react";
import { getProfile, putDeposit, putWithdraw } from "../API/users";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Formik, Field, Form } from "formik";

const Account = () => {
  const { data } = useQuery({
    queryKey: ["profiles"],
    queryFn: getProfile,
  });

  const mutation = useMutation({
    mutationKey: ["money"],
    mutationFn: putDeposit,
  });
  function submit(values) {
    mutation.mutate(values);
  }
  // // console.log(addMoney);
  //to check account withdraw
  const withdrawMutation = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: putWithdraw,
  });
  function withdraw(values) {
    withdrawMutation.mutate(values);
  }

  return (
    <div className="accountBackground">

      <div className="centerBalance">
        <div className="welcomeDiv">
        <h1>Welcome Mr: </h1> 
        <h2>{data?.username}</h2>
        </div>
      </div>

      <div className="centerBalance">
        <div className="balanceAccount">
          <h2>Your Balance is:</h2>
          <h3>{data?.balance}</h3>
        </div>
      </div>

      <div className="centerBalance">
        <div className="accountAction">
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
              <button className="button-arounder" type="submit">Deposit</button>
            </Form>
          </Formik>
        </div>


        <div className="accountAction">
          Amount to be Withdrawn:
          <Formik initialValues={{ amount: "" }} onSubmit={withdraw}>
            <Form>
              <Field
                placeholder="Withdraw Amount"
                className="barStyle"
                as="input"
                name="amount"
                type="number"
              />
              <button className="button2-arounder" type="submit">Withdraw</button>
            </Form>
          </Formik>
        </div>

      </div>

    </div>
  );
};

export default Account;