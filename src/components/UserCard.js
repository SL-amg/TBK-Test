import React from 'react'

function UserCard({ usercard, key, username, balance, image }) {
  return (
    <div className='usersDiv'>
      <div className="userAction">
        <h2 className='userImageBalance'>User Name</h2>
        <h3 className='valueUserBalance' >
          {usercard?.username}
        </h3>
        <h2 className='userImageBalance'>Image</h2>
        <img className='centerImageUser'
          src={"https://react-bank-project.eapi.joincoded.com/" + usercard?.image}
          alt="User"
          style={{ width: 50, height: 50 }}
        />
        <h2 className='userImageBalance' s>Balance</h2>
        <h3 className='valueUserBalance'>
          {usercard?.balance}
        </h3>
      </div>
    </div>
  )
}

export default UserCard
