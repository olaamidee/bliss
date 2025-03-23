import React, { useState } from 'react'
import './Wallet.css'

export const Wallet = () => {
  const [balance] = useState(1234.56)
  const [transactions] = useState([
    {
      id: 1,
      type: 'deposit',
      amount: 500.00,
      date: '2024-03-15',
      description: 'Monthly deposit'
    },
    {
      id: 2,
      type: 'withdrawal',
      amount: -150.00,
      date: '2024-03-14',
      description: 'Grocery shopping'
    },
    {
      id: 3,
      type: 'transfer',
      amount: -200.00,
      date: '2024-03-13',
      description: 'Transfer to savings'
    }
  ])

  return (
    <div className="wallet-container">
      <div className="wallet-header">
        <h1>My Wallet</h1>
        <div className="wallet-balance">
          <span className="balance-label">Current Balance</span>
          <span className="balance-amount">${balance.toFixed(2)}</span>
        </div>
      </div>

      <div className="wallet-actions">
        <button className="action-button deposit">Deposit</button>
        <button className="action-button withdraw">Withdraw</button>
        <button className="action-button transfer">Transfer</button>
      </div>

      <div className="transaction-history">
        <h2>Transaction History</h2>
        <div className="transactions-list">
          {transactions.map(transaction => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-info">
                <span className="transaction-type">{transaction.type}</span>
                <span className="transaction-description">{transaction.description}</span>
              </div>
              <div className="transaction-details">
                <span className={`transaction-amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </span>
                <span className="transaction-date">{transaction.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 