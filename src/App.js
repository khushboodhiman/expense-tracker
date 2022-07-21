import { useState } from "react";
import "./App.css";
import AddExpense from "./Components/AddExpense";
import ExpenseTable from "./Components/ExpenseTable";
import { Expenses as expenses } from "./Expenses";
import Login from "./Components/Login";
import { AuthContext } from "./AuthState";
import Header from "./Components/Header";

function App() {
  const [expenseData, setExpenseData] = useState(expenses);
  const [isAuth, setAuth] = useState(false);

  const filterChangeHandler = (filteredExpenseItems) => {
    setExpenseData(filteredExpenseItems);
  };

  const addNewExpenseHandler = (expense) => {
    setExpenseData((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setAuth }}>
        <Header />
        <Login />
        {isAuth && (
          <>
            <AddExpense onAddNewExpense={addNewExpenseHandler} />
            <ExpenseTable
              expenseData={expenseData}
              onFilterChange={filterChangeHandler}
            />
          </>
        )}
      </AuthContext.Provider>
    </>
  );
}

export default App;
