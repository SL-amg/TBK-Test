import React from "react";
import { getProfile, Deposit } from "../API/users";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const { data } = useQuery({
    queryKey: ["profiles"],
    queryFn: getProfile,
  });
  console.log(data);

  return (
    <div>
      <div>
        username:
        <h2>{data?.username}</h2>
      </div>

      <div>
        image:
        <h2>{data?.image}</h2>
      </div>
      <div>
        Balance:
        <h2>{data?.balance}</h2>
      </div>
    </div>
  );
};

export default Profile;