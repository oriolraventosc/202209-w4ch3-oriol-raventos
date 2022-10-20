import Keyboard from "../Keyboard/Keyboard";
import ActionsNumberToCall from "../Display/ActionsNumberToCall";
import CallButton from "../CallButton/CallButton";
import Info from "../Info/Info";
import HangButton from "../HangButton/HangButton";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Info />
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <ActionsNumberToCall />
          <CallButton />
          <HangButton />
        </div>
      </main>
    </div>
  );
};

export default App;
