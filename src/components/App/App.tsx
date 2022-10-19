import Keyboard from "../Keyboard/Keyboard";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <span className="number">667359961</span>
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
