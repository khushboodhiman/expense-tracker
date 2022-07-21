import FilterBar from "./FilterBar";
import "./FilterChart.css";

function FilterChart(props) {
  const { items } = props;
  // console.log("items", items);

  const expenses = items.map((exp) => exp?.expense || 0);
  const maxExpense = Math.max(...expenses);

  return (
    <div className="chart-wrapper">
      {items.map((expense) => {
        return (
          <FilterBar
            maxExpense={maxExpense}
            expense={expense?.expense}
            label={expense?.month}
            key={expense?.month}
          />
        );
      })}
    </div>
  );
}

export default FilterChart;
