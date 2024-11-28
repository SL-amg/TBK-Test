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
    <div className="profileBackground">
      <div className="centerProfile">
<div className="profileAction" >
      <div>
        <h1 className="profileWelcome">Welcome</h1>
        <h2 className="welcomeName">{data?.username}</h2>
      </div>

      <div>
        <h2>Profile image:</h2>
        <h2>{data?.image}</h2>
      </div>
      <div className="balanceMainDiv">
        <h2>Your Balance Is:</h2>
        <div className="balanceDiv">
        <h2 className="welcomeBalance">{data?.balance} </h2>
        <h3>  KWD</h3>
        </div>
      </div>
    </div>
    </div>
    </div>
    
    
  );
};

export default Profile;