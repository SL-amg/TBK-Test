import React from "react";
import { getAllUsers } from "../API/users";
import { useQuery } from "@tanstack/react-query";

const User = () => {
    const { data: users } = useQuery({
      queryKey: ["usersdatalist"],
      queryFn: getAllUsers,
    });

    // from axio task to check why not working
  return (
    <>
       <h2 >Users</h2>
    <div >
      {users?.map((user) => (
        <div
          key={user?.id}
        >
          <img
            src={user?.image}
            alt="User"
          />
          <div >
            <h3 >
              {user?.name}
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