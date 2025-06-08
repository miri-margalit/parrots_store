import react, { useContext } from "react";

const MyContext = react.createContext();

export const MyProvider = MyContext.Provider;

export default MyContext;