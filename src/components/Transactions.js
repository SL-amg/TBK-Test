import React from "react";
import { getTransaction } from "../API/users";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import TransactionCard from "./TransactionCard";
import { useState } from "react";

const Transactions = () => {
  const queryClient = useQueryClient();
  const [type, setType] = useState("");
  const [query, setQuery]= useState ("");

  const { data } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransaction,
  });
  console.log(data)

  const transactionList = data?.filter((transaction)=>JSON.stringify(transaction.amount).includes(query))
  .filter((transaction) => transaction.type.includes(type))
    .map((transaction) =>
      <TransactionCard transaction={transaction} key={transaction?.id} amount={transaction?.amount} time={transaction?.createdAt} type={transaction?.type} />)

  return (
    <div>
      <div>
      <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(event)=> setQuery(event.target.value)} // created an onChange with input event that calles setQuery and gives it event.tagrt.value
                />
      </div>

      <div>
      Type:
      <select className="form-select" onChange={(event) => setType(event.target.value)}> {/* to add a filter by type */}
        <option value="" selected>
          All
        </option>
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>
      </div>
      
      {transactionList}
    </div>

  );
};

export default Transactions;