import React from "react";
import { getTransaction } from "../API/users";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


const Transactions = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransaction,
  });
console.log (data)


  return (
  <div>
       {data?.map((user) => (
        <div
          key={user?.id}
        >
          <div >
            <h3 >
              {user?.amount}
            </h3>
            <h3 >
              {user?.createdAt}
            </h3>
            {/* <h3 >
              {user?.from}
            </h3>
            <h3 >
              {user?.to}
            </h3> */}
            <h3 >
              {user?.type}
            </h3>
            {/* <h3 >
              {user?.updatedAt}
            </h3> */}
          </div>
        </div>
      ))}
  </div>
  
  );
};

export default Transactions;