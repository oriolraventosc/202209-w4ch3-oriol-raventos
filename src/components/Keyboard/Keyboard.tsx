import numbers from "../../data/numbers";
import phoneContext from "../../context/phoneContext";
import { useContext } from "react";

const Keyboard = (): JSX.Element => {
  const { addNumbers, deleteNumbers } = useContext(phoneContext);

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((number, index) => {
          return (
            <li key={index}>
              <button className="key" onClick={() => addNumbers(number)}>
                {number}
              </button>
            </li>
          );
        })}
        <li>
          <button className="key big" onClick={() => deleteNumbers()}>
            delete
          </button>
        </li>
      </ol>
    </div>
  );
};

export default Keyboard;
