import "./App.css";
import Board from "./components/Board/board";

function App() {
  return (
    <div className="app ">
      <header className="font-outfit">
        <h1 className="text-center text-gray-800 text-4xl py-6 font-semibold tracking-wider">
          Tic-Tac-Toe
        </h1>
      </header>
      <Board />
      <footer className="flex flex-col gap-3 justify-center items-center text-lg my-10 font-outfit">
        <span>Made by </span>
        <a
          href="https://twitter.com/tharunk1705"
          target="_blank"
          rel="noreferrer"
          className="bg-[#1da1f2] text-white py-2 px-4 rounded-lg shadow-lg "
        >
          <span className="twitter-logo">
            <ion-icon name="logo-twitter"></ion-icon>
          </span>{" "}
          @tharunk1705
        </a>
      </footer>
    </div>
  );
}

export default App;
