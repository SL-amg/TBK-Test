import React from 'react'

function TransactionCard({transaction, key, amount, time, type}) {
  return (
    <div>
      <div>
        <h2>Amount</h2>
        <h3 >
              {transaction?.amount}
        </h3>
      </div>
      <div>
        <h2>Time</h2>
        <h3 >
              {transaction?.createdAt}
        </h3>
        <div>
        <h2>Type</h2>
        <h3 >
              {transaction?.type}
        </h3>
      </div>
      </div>
    </div>
  )
}

export default TransactionCard
