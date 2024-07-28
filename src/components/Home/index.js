import {Link} from 'react-router-dom'

import {Component} from 'react'
import {RiAddFill} from 'react-icons/ri'

import NewTransaction from '../NewTransaction'

import './index.css'

class Home extends Component {
  state = {transaction: []}

  setTransactions = data => {
    this.setState({transaction: data})
  }

  fetchTransactions = () => {
    fetch('http://localhost:3001/transactions').then(response => {
      const transactionsWithBalance = this.calculateRunningBalance(
        response.data,
      )
      this.setTransactions(transactionsWithBalance)
      console.log(response)
    })
  }

  calculateRunningBalance = transactions => {
    let balance = 0
    return transactions.map(transaction => {
      if (transaction.type === 'credit') {
        balance += transaction.amount
      } else if (transaction.type === 'debit') {
        balance -= transaction.amount
      }
      return {...transaction, balance}
    })
  }

  render() {
    const {transactionData} = this.props
    const {transaction} = this.state

    const transactions = this.calculateRunningBalance([
      ...transactionData,
      transaction,
    ])
    console.log(transactions)

    return (
      <div className="home-container">
        <h1 className="heading">Transactions</h1>
        <div className="home-card">
          <h2 className="table-heading">Office Transactions</h2>
          <Link to="/new">
            <button type="button" className="add-transaction">
              <RiAddFill /> Add Transactions
            </button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Amount</th>
          </tr>

          {transactions.map(eachTransaction => (
            <tr key={eachTransaction.id}>
              <td>{eachTransaction.date}</td>
              <td>{eachTransaction.description}</td>
              {eachTransaction.type === 'credit' ? (
                <td>{eachTransaction.amount}</td>
              ) : (
                <td>0</td>
              )}
              {eachTransaction.type === 'debit' ? (
                <td>{eachTransaction.amount}</td>
              ) : (
                <td>0</td>
              )}

              <td>{eachTransaction.balance}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default Home
