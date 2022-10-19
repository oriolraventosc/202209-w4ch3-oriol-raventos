import NumbersContext from "./phoneContext";
import { useState } from "react";

interface NumbersContextProveidorProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProveidor = ({
  children,
}: NumbersContextProveidorProps): JSX.Element => {
  const [number] = useState([]);
  return (
    <NumbersContext.Provider value={{ number }}>
      {children}
    </NumbersContext.Provider>
  );
};

export default PhoneContextProveidor;
