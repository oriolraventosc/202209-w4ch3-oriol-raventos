import NumbersContext from "./phoneContext";
import { useState } from "react";

interface NumbersContextProveidorProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProveidor = ({
  children,
}: NumbersContextProveidorProps): JSX.Element => {
  const [number] = useState([]);
  let [usedNumbers, nextNumber] = useState<number[]>([]);

  const addNumbers = () => {
    nextNumber(usedNumbers);
  };
  return (
    <NumbersContext.Provider value={{ number, usedNumbers, addNumbers }}>
      {children}
    </NumbersContext.Provider>
  );
};

export default PhoneContextProveidor;
