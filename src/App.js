import "./App.css";
import Board from "./components/Board/board";

function App() {
  return (
    <div className="app">
      <header className="font-outfit">
        <h1 className="text-center text-gray-800 text-4xl py-6 font-semibold tracking-wider">
          Tic-Tac-Toe
        </h1>
      </header>
      <Board />
    </div>
  );
}

export default App;
