import { createContext } from "react";
import NumbersInterface from "../data/types";

interface numbersContextStructure {
  number: NumbersInterface[];
}

const NumbersContext = createContext<numbersContextStructure>(
  {} as numbersContextStructure
);

export default NumbersContext;
