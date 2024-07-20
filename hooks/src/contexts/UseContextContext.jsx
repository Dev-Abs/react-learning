import { createContext } from "react";

export const UseContextContext = createContext(); // Create a context using React.createContext() method.

const ContextProvider = (props) => {
  const phone = "+91 1234567890";
  const name = "John Doe";

  return (
    <UseContextContext.Provider value={{phone, name}}>
      {props.children}
    </UseContextContext.Provider>
  );
};

export default ContextProvider;
