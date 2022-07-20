import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Overlay = (props) => {
  return (
    <div className={classes.modalWrapper}>
      <header>
        <h1>Expense Added</h1>
      </header>
      <div className={classes.content}>
        Your expense has been added, we'll keep a track of it.
      </div>
      <footer>
        <button onClick={props.closeModal}>OK</button>
      </footer>
    </div>
  );
};

function Modal(props) {
  return ReactDOM.createPortal(
    <Overlay closeModal={props.closeModal} />,
    document.getElementById("modal-div")
  );
}

export default Modal;
