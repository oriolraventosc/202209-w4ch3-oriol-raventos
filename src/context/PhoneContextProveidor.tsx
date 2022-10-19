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

  const addNumbers = (numberClicked: number) => {
    if (usedNumbers.length === 9) {
      return;
    }
    nextNumber([...usedNumbers, numberClicked]);
  };

  const deleteNumbers = () => {
    nextNumber((usedNumbers = []));
  };

  return (
    <NumbersContext.Provider
      value={{ number, usedNumbers, addNumbers, deleteNumbers }}
    >
      {children}
    </NumbersContext.Provider>
  );
};

export default PhoneContextProveidor;
