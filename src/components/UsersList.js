import React from "react";
import { getAllUsers } from "../API/users";
import { useQuery } from "@tanstack/react-query";
import UserCard from "./UserCard";

const User = () => {
  const { data, isFetching, isSuccess, refetch } = useQuery({
    queryKey: ["userslist"],
    queryFn: getAllUsers,
  });

  const userCardView = data?.map((usercard) =>
    <UserCard usercard={usercard} key={usercard?.id} username={usercard?.username} balance={usercard?.balance} image={usercard?.image} />)


  // from axio task to check why not working

  return (
    <div className="transactionBackground">
      {userCardView}
    </div>
  )
};

export default User;