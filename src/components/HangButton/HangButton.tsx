import { useContext } from "react";
import NumbersContext from "../../context/phoneContext";

const HangButton = (): JSX.Element => {
  const { hangBefore } = useContext(NumbersContext);
  return (
    <a href=" # " className={hangBefore}>
      Hang
    </a>
  );
};

export default HangButton;
