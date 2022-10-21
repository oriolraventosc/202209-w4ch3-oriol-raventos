import { useContext } from "react";
import NumbersContext from "../../../context/phoneContext";

const CallButton = (): JSX.Element => {
  const { buttonInitialClass, changeToCall } = useContext(NumbersContext);

  return (
    <a href=" # " onClick={() => changeToCall()} className={buttonInitialClass}>
      Call
    </a>
  );
};
export default CallButton;
