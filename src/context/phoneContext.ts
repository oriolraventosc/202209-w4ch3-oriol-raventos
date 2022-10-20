import { createContext } from "react";
import NumbersInterface from "../data/types";

interface numbersContextStructure {
  number: NumbersInterface[];
  usedNumbers: number[];
  addNumbers: (numberClicked: number) => void;
  deleteNumbers: () => void;
  buttonInitialClass: string;
  changeToCall: () => void;
  beforeCall: string;
  changeButtons: () => void;
  hangBefore: string;
}

const NumbersContext = createContext<numbersContextStructure>(
  {} as numbersContextStructure
);

export default NumbersContext;
