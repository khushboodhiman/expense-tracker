import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.expenseData.length === 0) return <p>No Data Found</p>;
  return props.expenseData.map((expense) => {
    return (
      <ExpenseItem
        key={expense._id}
        name={expense.name}
        date={expense.date}
        amount={expense.amount}
      />
    );
  });
}

export default ExpenseList;
