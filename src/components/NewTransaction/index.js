import {Component} from 'react'
import {IoMdClose, IoIosSave} from 'react-icons/io'

import './index.css'

class NewTransaction extends Component {
  state = {date: '', description: '', type: '', amount: '', transactions: []}

  onChangeTransactionType = event => {
    this.setState({type: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()

    const {date, description, type, amount} = this.state
    const transaction = [date, description, type, amount]

    const balance = Number(transaction.amount)

    fetch('http://localhost:3001/transactionData', {
      date: transaction.date,
      description: transaction.description,
      type: transaction.type,
      amount: balance,
    }).then(response => console.log(response))

    const transactionData = this.props
    this.setState({transactions: {...transactionData, transaction}})
  }

  render() {
    const {date, description, type, amount} = this.state

    const transactionData = this.props

    return (
      <div className="container">
        <h1 className="heading">New Transaction</h1>
        <form onSubmit={this.onSubmit}>
          <div className="card">
            <label htmlFor="type" className="label-element">
              Transaction Type
            </label>
            <select
              id="type"
              className="input-element"
              onChange={this.onChangeTransactionType}
              value={type}
            >
              <option>Select</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>
          <div className="card">
            <label htmlFor="date" className="label-element">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="input-element"
              onChange={this.onChangeDate}
              value={date}
            />
          </div>
          <div className="card">
            <label htmlFor="amount" className="label-element">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="input-element"
              onChange={this.onChangeAmount}
              value={amount}
            />
          </div>
          <div className="card">
            <label htmlFor="description" className="label-element">
              Description
            </label>
            <textarea
              rows="3"
              cols="50"
              id="description"
              className="text-area input-element"
              onChange={this.onChangeDescription}
              value={description}
            />
          </div>
          <div className="button-card">
            <button type="submit" className="submit-button button">
              <IoIosSave /> Save
            </button>
            <button type="button" className="button">
              <IoMdClose /> Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default NewTransaction
