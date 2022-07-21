import "./Card.css";

const Card = (props) => {
  return <div className="dark_card">{props.children}</div>;
};

export default Card;
