import { useContext } from "react";
import NumbersContext from "../../context/phoneContext";

const ActionsCallButton = (): JSX.Element => {
  const { buttonInitialClass, changeToCall } = useContext(NumbersContext);
  return (
    <a
      href="#none"
      onClick={() => changeToCall()}
      className={buttonInitialClass}
    >
      Call
    </a>
  );
};
export default ActionsCallButton;
