import Keyboard from "../Keyboard/Keyboard";
import ActionsNumberToCall from "../Display/ActionsNumberToCall";
import ActionsCallButton from "../ActionsCallButton/ActionsCallButton";
import Info from "../Info/Info";
import ActionsHangButton from "../ActionsHangButton/ActionsHangButton";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Info />
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <ActionsNumberToCall />
          <ActionsCallButton />
          <ActionsHangButton />
        </div>
      </main>
    </div>
  );
};

export default App;
