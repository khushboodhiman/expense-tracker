import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";

function AddExpense(props) {
  const newExpenseHandler = (expense) => {
    console.log(expense);
    props.onAddNewExpense(expense);
  };

  return (
    <div className="add-expense">
      <ExpenseForm onNewExpense={newExpenseHandler} />
    </div>
  );
}

export default AddExpense;
