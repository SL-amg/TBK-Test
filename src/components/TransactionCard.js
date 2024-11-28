import React from 'react'

function TransactionCard({ transaction, key, amount, time, type }) {
  return (
    <div className='transactionArrange'>
      <h2>Type:</h2>
      <h3 >
        {transaction?.type}
      </h3>
      <h2>Amount:</h2>
      <h3 >
        {transaction?.amount}
      </h3>

      <h2>Time:</h2>
      <h3 >
        {transaction?.createdAt}
      </h3>



    </div>
  )
}

export default TransactionCard
