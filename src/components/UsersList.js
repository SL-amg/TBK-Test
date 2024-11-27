import React from "react";
import { getAllUsers } from "../API/users";
import { useQuery } from "@tanstack/react-query";

const User = () => {
    const { data, isFetching, isSuccess, refetch } = useQuery({
      queryKey: ["userslist"],
      queryFn: getAllUsers,
    });

    // from axio task to check why not working

    return (
    <>
       <h2 >Users</h2>
    <div >
      {data?.map((user) => (
        <div
          key={user?.id}
        >
          <img
            src={"https://react-bank-project.eapi.joincoded.com/"+user?.image}
            alt="User"
            style={{width:50,height:50}}
          />
          <div >
            <h3 >
              {user?.username}
            </h3>
            <p>{user?.balance}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
};

export default User;