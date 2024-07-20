import { createContext } from "react";

export const UseContextContext = createContext(); // Create a context using React.createContext() method.

const ContextProvider = () => {
  const phone = "+91 1234567890";

  return (
    <UseContextContext.Provider value={phone}>
      {props.children}
    </UseContextContext.Provider>
  );
};

export default ContextProvider;
