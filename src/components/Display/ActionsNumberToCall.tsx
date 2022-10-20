import { useContext } from "react";
import NumbersContext from "../../context/phoneContext";

const ActionsNumberToCall = (): JSX.Element => {
  const { usedNumbers } = useContext(NumbersContext);
  return <span className="number">{usedNumbers}</span>;
};
export default ActionsNumberToCall;
