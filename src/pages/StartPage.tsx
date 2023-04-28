import "./../scss/startPage.scss";
import GameButton from "./../components/GameButton";
import logo from "./../assets/logo.svg";
export interface Props {
  onStartGame: () => void;
}

function StartPage(props: Props) {
  const startGame = () => {
    props.onStartGame();
  };
  return (
    <div className="startPage">
      <img className="logo" src={logo} alt="" />
      <div className="gameInfo">
        <h1 className="gameTitle">Who wants to be a millionaire?</h1>
        <GameButton onClick={startGame}>Start</GameButton>
      </div>
    </div>
  );
}

export default StartPage;
