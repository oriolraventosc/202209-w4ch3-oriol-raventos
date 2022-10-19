import Keyboard from "../Keyboard/Keyboard";
import ActionsNumberToCall from "../ActionsNumberToCall/ActionsNumberToCall";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <ActionsNumberToCall
            usedNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            number={0}
          />
          <a href="index.html" className="call">
            Call
          </a>
          <a href="index.html" className="hang active">
            Hang
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
