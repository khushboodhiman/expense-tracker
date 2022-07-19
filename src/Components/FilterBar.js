import "./FilterBar.css";

function FilterBar(props) {
  // console.log("filter bar", props);
  const { maxExpense, expense, label } = props;
  const fillHeight = Math.round((expense / maxExpense) * 100) + "%";

  return (
    <div className="filter-bar">
      <div className="filled-bar" style={{ height: fillHeight }}></div>
      <div className="label">{label}</div>
    </div>
  );
}

export default FilterBar;
