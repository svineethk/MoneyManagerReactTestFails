import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TranscationItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    TransactionList: [],
    title: '',
    amount: '',
    optionType: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionType: event.target.value})
  }

  onAddButton = event => {
    event.preventDefault()
    const {title, amount, optionType} = this.state

    const typeList = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionType,
    )

    const {displayText} = typeList

    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type: displayText,
    }

    this.setState(prevState => ({
      TransactionList: [...prevState.TransactionList, newTransaction],
      title: '',
      amount: '',
      optionType: transactionTypeOptions[0].optionId,
    }))
  }

  getBalanceAmount = () => {
    const {TransactionList} = this.state
    let IncomeAmount = 0
    let ExpenseAmount = 0
    let BalanceAmount = 0

    TransactionList.forEach(eachTransaction => {
      if (eachTransaction.optionType === transactionTypeOptions[0].optionId) {
        IncomeAmount += parseInt(eachTransaction.amount)
      } else if (
        eachTransaction.optionType === transactionTypeOptions[1].optionId
      ) {
        ExpenseAmount += parseInt(eachTransaction.amount)
      }
    })

    BalanceAmount = IncomeAmount - ExpenseAmount
    return BalanceAmount
  }

  getIncomeAmount = () => {
    const {TransactionList} = this.state
    let IncomeAmount = 0

    TransactionList.forEach(eachTransaction => {
      if (eachTransaction.optionType === transactionTypeOptions[0].optionId) {
        IncomeAmount += parseInt(eachTransaction.amount)
      }
    })

    return IncomeAmount
  }

  getExpenseAmount = () => {
    const {TransactionList} = this.state
    let ExpenseAmount = 0

    TransactionList.forEach(eachTransaction => {
      if (eachTransaction.optionType === transactionTypeOptions[1].optionId) {
        ExpenseAmount += parseInt(eachTransaction.amount)
      }
    })

    return ExpenseAmount
  }

  onDeleteItem = id => {
    const {TransactionList} = this.state
    const filteredTransactionList = TransactionList.filter(
      eachList => eachList.id !== id,
    )

    this.setState({TransactionList: filteredTransactionList})
  }

  render() {
    const {TransactionList, title, amount, optionType} = this.state
    const BalanceAmount = this.getBalanceAmount()
    const IncomeAmount = this.getIncomeAmount()
    const ExpenseAmount = this.getExpenseAmount()

    return (
      <div className="app-container">
        <div className="name-container">
          <h1 className="name-header">Hi, Richard</h1>
          <p className="name-para">
            Welcome back to your <span className="element">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          BalanceAmount={BalanceAmount}
          IncomeAmount={IncomeAmount}
          ExpenseAmount={ExpenseAmount}
        />
        <div className="transaction-container">
          <form className="transaction-input" onSubmit={this.onAddButton}>
            <h1>Add Transaction</h1>
            <label htmlFor="title" className="input-title">
              TITLE
            </label>
            <input
              id="title"
              className="input"
              placeholder="TITLE"
              onChange={this.onChangeTitle}
              value={title}
            />
            <label htmlFor="amount" className="input-title">
              AMOUNT
            </label>
            <input
              id="amount"
              className="input"
              placeholder="AMOUNT"
              value={amount}
              onChange={this.onChangeAmount}
            />
            <label htmlFor="selectType" className="input-title">
              TYPE
            </label>
            <select
              id="selectType"
              className="inputs"
              onChange={this.onChangeType}
              value={optionType}
            >
              {transactionTypeOptions.map(eachType => (
                <option key={eachType.optionId} value={eachType.optionId}>
                  {eachType.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <div className="transaction-history">
            <h1>History</h1>
            <ul>
              <li className="transaction-type-container">
                <p className="transaction-type-header">Title</p>
                <p className="transaction-type-headers">Amount</p>
                <p className="transaction-type-headers">Type</p>
              </li>
              {TransactionList.map(eachTransaction => (
                <TranscationItem
                  key={eachTransaction.id}
                  eachTransaction={eachTransaction}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
