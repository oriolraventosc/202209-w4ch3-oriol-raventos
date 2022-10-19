import numbersInterface from "../../data/types";

const ActionsNumberToCall = ({
  usedNumbers,
}: numbersInterface): JSX.Element => {
  return <span className="number">{usedNumbers.join("")}</span>;
};
export default ActionsNumberToCall;
