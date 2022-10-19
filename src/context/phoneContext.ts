import { createContext } from "react";
import NumbersInterface from "../data/types";

interface numbersContextStructure {
  number: NumbersInterface[];
  usedNumbers: number[];
  addNumbers: (numberClicked: number) => void;
  deleteNumbers: () => void;
}

const NumbersContext = createContext<numbersContextStructure>(
  {} as numbersContextStructure
);

export default NumbersContext;
