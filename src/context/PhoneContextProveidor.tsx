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
  let [buttonInitialClass, buttonNewClass] = useState<string>("call");
  let [beforeCall, inCall] = useState<string>("off");
  let [hangBefore, hangAfter] = useState<string>("off");

  const addNumbers = (numberClicked: number) => {
    if (usedNumbers.length === 9) {
      buttonNewClass("active");
      return;
    }
    nextNumber([...usedNumbers, numberClicked]);
  };

  const deleteNumbers = () => {
    nextNumber((usedNumbers = []));
    buttonNewClass("call");
  };

  const changeToCall = () => {
    buttonNewClass("off");
    inCall("message");
    changeButtons();
  };

  const changeButtons = () => {
    hangAfter("hang active");
  };

  return (
    <NumbersContext.Provider
      value={{
        number,
        usedNumbers,
        addNumbers,
        deleteNumbers,
        buttonInitialClass,
        changeToCall,
        beforeCall,
        changeButtons,
        hangBefore,
      }}
    >
      {children}
    </NumbersContext.Provider>
  );
};

export default PhoneContextProveidor;
