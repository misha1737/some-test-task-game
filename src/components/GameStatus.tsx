import "./../scss/gameStatus.scss";
import QuestionPrice from "./questionPrice";
import close from "./../assets/close.svg";
interface Props {
  priceList: Array<string>;
  questionNumber: number;
  onClose: () => void;
  showGameStatus: boolean;
}

function GameStatus(props: Props) {
  const isActiveQuestionPrice = (el: string) => {
    return props.priceList[props.questionNumber] === el;
  };
  const isQuestionDone = (el: string) => {
    const index = props.priceList.findIndex((item) => item === el);
    return index < props.questionNumber;
  };
  return (
    <div className={`priceList ${props.showGameStatus ? "active" : ""}`}>
      <img
        className="closeIcon"
        onClick={() => props.onClose()}
        src={close}
        alt=""
      />
      {props.priceList ? (
        props.priceList.map((el) => (
          <div key={el}>
            <QuestionPrice
              done={isQuestionDone(el)}
              active={isActiveQuestionPrice(el)}
            >
              {el}
            </QuestionPrice>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default GameStatus;
