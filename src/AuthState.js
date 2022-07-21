import { createContext } from "react";

export const LoginCreds = {
  email: "khushboodhiman716@gmail.com",
  password: "khushboo",
};

export const AuthContext = createContext({
  isAuth: false,
  setAuth: (auth) => {},
});
