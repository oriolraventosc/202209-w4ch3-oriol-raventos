import { useContext } from "react";
import NumbersContext from "../../context/phoneContext";

const Info = (): JSX.Element => {
  const { beforeCall } = useContext(NumbersContext);

  return <span className={beforeCall}>Calling...</span>;
};

export default Info;
