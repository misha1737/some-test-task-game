import "./../scss/finalPage.scss";
import GameButton from "./../components/GameButton";
import logo from "./../assets/logo.svg";
export interface Props {
  onStartGame: () => void;
  score: string;
}
function App(props: Props) {
  const startGame = () => {
    props.onStartGame();
  };
  return (
    <div className="finalPage">
      <img className="logo" src={logo} alt="" />
      <div className="gameInfo">
        <h4 className="gameScoreText">Total score:</h4>
        <h3 className="gameScore">{`${props.score} earned`}</h3>
        <GameButton onClick={startGame}>Try again</GameButton>
      </div>
    </div>
  );
}

export default App;
