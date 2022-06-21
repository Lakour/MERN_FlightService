import { createContext } from "react";

export const contexts = {
  dark: { backgroundColor: "#221D1D", color: "black" },
  light: { backgroundColor: "#F6F5F5", color: "white" }
};

const MyContext = createContext(contexts.light);

export default MyContext;
