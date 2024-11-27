import React from "react";
import { getTransaction } from "../API/users";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import TransactionCard from "./TransactionCard";


const Transactions = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransaction,
  });
console.log (data)

const transactionList = data?.map((transaction)=>
<TransactionCard transaction={transaction} key={transaction?.id} amount={transaction?.amount} time={transaction?.createdAt} type={transaction?.type} />)

  return (
  <div>
{transactionList}
  </div>
  
  );
};

export default Transactions;