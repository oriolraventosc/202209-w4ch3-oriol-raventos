import numbers from "../../data/numbers";

const Keyboard = (): JSX.Element => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((number, index) => {
          return (
            <li key={index}>
              <button className="key">{number}</button>
            </li>
          );
        })}
        <li>
          <button className="key big">delete</button>
        </li>
      </ol>
    </div>
  );
};

export default Keyboard;
