import "../style.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [expenseDate, setExpenseDate] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
    console.log(event.target.value);
  };

  const expenseDateHandler = (event) => {
    setExpenseDate(event.target.value);
  };

  const addExpenseHandler = (event) => {
    event.preventDefault();
    const expense = {
      _id: Math.random(),
      name: title,
      date: new Date(expenseDate),
      amount: amount,
    };
    console.log(expense);
    setTitle("");
    setAmount(0);
    setExpenseDate("");
    props.onNewExpense(expense);
  };

  return (
    <>
      <h3 className="heading">Add New Expense Item</h3>
      <form onSubmit={addExpenseHandler}>
        <div className="input-wrapper">
          <div>
            <label>Expense Title</label>
            <input
              type="string"
              name="title"
              value={title}
              onChange={titleHandler}
              required="true"
            />
          </div>
          <div>
            <label>Expense Amount</label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={amountHandler}
              required="true"
            />
          </div>
          <div>
            <label>Expense Date</label>
            <input
              type="date"
              placeholder="DD-MM-YYYY"
              min="2020-01-01T00:00"
              max="2023-12-31T00:00"
              name="expense-date"
              value={expenseDate}
              onChange={expenseDateHandler}
              required="true"
            />
          </div>
        </div>
        <input type="submit" className="add-expense-btn" value="Add Expense" />
      </form>
    </>
  );
}

export default ExpenseForm;
