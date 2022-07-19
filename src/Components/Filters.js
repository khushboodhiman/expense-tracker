import "../style.css";

function Filters(props) {
  const { text, options } = props;

  return (
    <div className="filter-div">
      <h3 className="heading">{text}</h3>
      <select
        onChange={(event) => {
          props.onFilterChange(event.target.value);
        }}
      >
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Filters;
