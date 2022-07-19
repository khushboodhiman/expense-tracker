import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  let { name, date, amount } = props;
  date = new Date(date);
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="item-name">{name}</div>
      <div className="amount">{amount}</div>
    </div>
  );
}

export default ExpenseItem;
