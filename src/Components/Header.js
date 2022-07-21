import classes from "./Header.module.css";
import { AuthContext } from "../AuthState";
import { useContext } from "react";

function Header() {
  const { setAuth } = useContext(AuthContext);

  return (
    <div className={classes.headerWrapper}>
      <div className={classes.ul}>
        <div className={classes.li}>Home</div>
        <div className={classes.li}>Add Expense</div>
        <div className={classes.li}>Your Expenses</div>
        <div>
          <button
            className={classes.secondaryButton}
            onClick={() => setAuth(false)}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
