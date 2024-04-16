// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransaction, onDeleteItem} = props
  const {id, title, amount, type} = eachTransaction

  const onDeleteClicked = () => {
    onDeleteItem(id)
  }

  return (
    <li className="each-type-container">
      <p className="each-type-header">{title}</p>
      <p className="each-type-headers">{amount}</p>
      <p className="each-type-headers">{type}</p>
      <button
        type="button"
        className="button"
        onClick={onDeleteClicked}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-button"
        />
      </button>
    </li>
  )
}

export default TransactionItem
