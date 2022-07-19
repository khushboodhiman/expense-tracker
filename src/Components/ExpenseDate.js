import "./ExpenseDate.css";

function ExpenseDate(props) {
  const date = props.date;
  return (
    <div className="expense-date">
      <div>{date.toLocaleString("en-US", { month: "long" })}</div>
      <div className="year">{date.getFullYear()}</div>
      <div className="day">
        {date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
    </div>
  );
}

export default ExpenseDate;
