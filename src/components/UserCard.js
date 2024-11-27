import React from 'react'

function UserCard({usercard, key, username, balance, image}){
  return (
    <div>
       <div>
        <h2>User Name</h2>
        <h3 >
              {usercard?.username}
        </h3>
      </div>
      <div>
        <h2>Image</h2>
     
        <img
            src={"https://react-bank-project.eapi.joincoded.com/"+usercard?.image}
            alt="User"
            style={{width:50,height:50}}
          />
   
        <div>
        <h2>Balance</h2>
        <h3 >
              {usercard?.balance}
        </h3>
      </div>
      </div>
    </div>
  )
}

export default UserCard
