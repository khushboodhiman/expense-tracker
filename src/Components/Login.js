import Card from "./Card";
import "../style.css";
import { useContext, useRef } from "react";
import { AuthContext, LoginCreds } from "../AuthState";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  const validate = (event) => {
    event.preventDefault();
    if (
      enteredEmail.current.value === LoginCreds.email &&
      enteredPassword.current.value === LoginCreds.password
    ) {
      setAuth(true);
    }
    // console.log(isAuth);
  };

  return (
    <>
      <Card>
        <form onSubmit={validate}>
          <div className="input-wrapper">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" ref={enteredEmail} required />
            {/* <p>Email is not correct.</p> */}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              ref={enteredPassword}
              required
            />
            {/* <p>Password does not match.</p> */}
          </div>
          <div className="button-wrapper">
            <input type="submit" value="Login" className="primary-btn" />
          </div>
        </form>
      </Card>
    </>
  );
}

export default Login;
