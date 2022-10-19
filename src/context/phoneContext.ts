import { createContext } from "react";
import NumbersInterface from "../data/types";

interface numbersContextStructure {
  number: NumbersInterface[];
  usedNumbers: number[];
  addNumbers: () => void;
}

const NumbersContext = createContext<numbersContextStructure>(
  {} as numbersContextStructure
);

export default NumbersContext;
