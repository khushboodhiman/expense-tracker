import "./ExpenseTable.css";
import Filters from "./Filters";
import ExpenseList from "./ExpenseList";
import { useEffect, useMemo, useState } from "react";
import FilterChart from "./FilterChart";

function ExpenseTable(props) {
  const [filter, setFilter] = useState("All");
  const [expensesPerMonth, setExpensesPerMonth] = useState([]);

  const filteredData = useMemo(() => {
    return props.expenseData.filter((item) => {
      return filter === "All" || item.date.getFullYear().toString() === filter;
    });
  }, [filter, props.expenseData]);

  const dummyExpenses = [
    {
      month: "Jan",
      expense: 0,
    },
    {
      month: "Feb",
      expense: 0,
    },
    {
      month: "Mar",
      expense: 0,
    },
    {
      month: "Apr",
      expense: 0,
    },
    {
      month: "May",
      expense: 0,
    },
    {
      month: "Jun",
      expense: 0,
    },
    {
      month: "Jul",
      expense: 0,
    },
    {
      month: "Aug",
      expense: 0,
    },
    {
      month: "Sep",
      expense: 0,
    },
    {
      month: "Oct",
      expense: 0,
    },
    {
      month: "Nov",
      expense: 0,
    },
    {
      month: "Dec",
      expense: 0,
    },
  ];

  const addMonthlyExpenses = () => {
    let newExpensesPerMonth = [...dummyExpenses.map((item) => ({ ...item }))];
    filteredData.forEach((item) => {
      let currentMonth = "" item.date.getMonth();
      newExpensesPerMonth[currentMonth].expense += Number(item.amount);
    });
    return newExpensesPerMonth;
  };

  const filterChangeHandler = (year) => {
    setFilter(year);
  };

  useEffect(() => {
    setExpensesPerMonth([...addMonthlyExpenses()]);
  }, [filteredData]);

  return (
    <>
      <div className="expense-table">
        <FilterChart items={expensesPerMonth} />
        <Filters
          text="Filter by Year"
          onFilterChange={filterChangeHandler}
          options={["All", 2020, 2021, 2022, 2023]}
        />
        {<ExpenseList expenseData={filteredData} />}
      </div>
    </>
  );
}

export default ExpenseTable;
