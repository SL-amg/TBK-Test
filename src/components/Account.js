import React, { useState } from "react";
import { getProfile, putDeposit, putWithdraw} from "../API/users";
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
      <div>
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
            <button type="submit">Withdraw</button>
          </Form>
        </Formik>
      </div> 


    </div>
  );
};

export default Account;