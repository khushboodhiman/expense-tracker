import { useState } from "react";
import "./App.css";
import AddExpense from "./Components/AddExpense";
import ExpenseTable from "./Components/ExpenseTable";
import { Expenses as expenses } from "./Expenses";

function App() {
  const [expenseData, setExpenseData] = useState(expenses);

  const filterChangeHandler = (filteredExpenseItems) => {
    setExpenseData(filteredExpenseItems);
  };

  const addNewExpenseHandler = (expense) => {
    console.log("app", expense);
    setExpenseData((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <>
      <AddExpense onAddNewExpense={addNewExpenseHandler} />
      <ExpenseTable
        expenseData={expenseData}
        onFilterChange={filterChangeHandler}
      />
    </>
  );
}

export default App;
