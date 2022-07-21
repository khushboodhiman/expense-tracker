import "../style.css";
import { useState } from "react";
import Modal from "./Modal";
import { useRef } from "react";

function ExpenseForm(props) {
  const title = useRef("");
  const amount = useRef("");
  const expenseDate = useRef(new Date());

  const [isNewExpense, setNewExpense] = useState(false);

  const addExpenseHandler = (event) => {
    event.preventDefault();
    const expense = {
      _id: Math.random(),
      name: title.current.value,
      date: new Date(expenseDate.current.value),
      amount: amount.current.value,
    };
    setNewExpense(true);
    title.current.value = "";
    expenseDate.current.value = "";
    amount.current.value = "";
    props.onNewExpense(expense);
  };

  const closeModal = () => {
    setNewExpense(false);
  };

  return (
    <>
      {isNewExpense && <Modal closeModal={closeModal} />}
      <h3 className="heading">Add New Expense Item</h3>
      <form onSubmit={addExpenseHandler}>
        <div className="input-wrapper">
          <label>Expense Title</label>
          <input type="string" name="title" ref={title} required />
        </div>
        <div className="input-wrapper">
          <label>Expense Amount</label>
          <input type="number" name="amount" ref={amount} required />
        </div>
        <div className="input-wrapper">
          <label>Expense Date</label>
          <input
            type="date"
            placeholder="DD-MM-YYYY"
            min="2020-01-01T00:00"
            max="2023-12-31T00:00"
            name="expense-date"
            ref={expenseDate}
            required
          />
        </div>
        <div className="button-wrapper">
          <input type="submit" className="primary-btn" value="Add Expense" />
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
