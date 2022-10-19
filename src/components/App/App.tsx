import Keyboard from "../Keyboard/Keyboard";
import ActionsNumberToCall from "../ActionsNumberToCall/ActionsNumberToCall";
import ActionsCallButton from "../ActionsCallButton/ActionsCallButton";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <ActionsNumberToCall />
          <ActionsCallButton />
          <a href="index.html" className="hang active">
            Hang
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
