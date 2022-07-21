import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "./Card";

function AddExpense(props) {
  const newExpenseHandler = (expense) => {
    console.log(expense);
    props.onAddNewExpense(expense);
  };

  return (
    <Card>
      <ExpenseForm onNewExpense={newExpenseHandler} />
    </Card>
  );
}

export default AddExpense;
