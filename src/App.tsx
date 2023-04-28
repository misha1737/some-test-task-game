import { useState } from "react";
import FinalPage from "./pages/FinalPage";
import GamePage from "./pages/GamePage";
import StartPage from "./pages/StartPage";

function App() {
  const [page, setPage] = useState("start");
  const [score, setScore] = useState("$0");
  const startGame = () => {
    setPage("game");
  };
  const gameOver = (score: string) => {
    setScore(score);
    setPage("final");
  };
  return (
    <div>
      {page === "start" && <StartPage onStartGame={startGame} />}
      {page === "game" && <GamePage onGameOver={gameOver} />}
      {page === "final" && <FinalPage score={score} onStartGame={startGame} />}
    </div>
  );
}

export default App;
