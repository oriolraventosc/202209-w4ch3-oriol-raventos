import { useContext } from "react";
import NumbersContext from "../../context/phoneContext";

const ActionsHangButton = (): JSX.Element => {
  const { hangBefore } = useContext(NumbersContext);
  return (
    <a href="index.html" className={hangBefore}>
      Hang
    </a>
  );
};

export default ActionsHangButton;
