import "./../scss/gameButton.scss";
interface Props {
  children: React.ReactNode;
  onClick: () => void;
}
function GameButton(props: Props) {
  return (
    <div onClick={props.onClick} className={`gameButton`}>
      <div className="gameButtonContent">{props.children}</div>
    </div>
  );
}

export default GameButton;
