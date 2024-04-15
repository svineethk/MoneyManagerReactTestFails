// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {BalanceAmount, IncomeAmount, ExpenseAmount} = props

  return (
    <div className="money-container">
      <div className="balance-container">
        <div className="balance-image-container ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balance-logo"
          />
        </div>
        <div className="balance-display-container">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {BalanceAmount}</p>
        </div>
      </div>
      <div className="income-container">
        <div className="income-image-container ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="income-logo"
          />
        </div>
        <div className="income-display-container">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {IncomeAmount}</p>
        </div>
      </div>
      <div className="expense-container">
        <div className="expense-image-container ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="expense-logo"
          />
        </div>
        <div className="expense-display-container">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {ExpenseAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
