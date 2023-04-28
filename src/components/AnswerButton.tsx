import "./../scss/answerButton.scss";
interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  selected: boolean;
  correct: boolean;
  wrong: boolean;
}
function AnswerButton(props: Props) {
  return (
    <div
      onClick={props.onClick}
      className={`answerButton ${props.selected ? "selected" : ""} ${
        props.correct ? "correct" : ""
      } ${props.wrong ? "wrong" : ""}`}
    >
      <svg
        width="421"
        height="72"
        viewBox="0 0 421 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="answerButtonSvg"
      >
        <path d="M404 36L421 36" stroke="currentColor" />
        <path d="M0 36L17 36" stroke="currentColor" />
        <path
          d="M39.8137 5.09773C41.9857 2.2033 45.3933 0.5 49.012 0.5H371.988C375.607 0.5 379.014 2.2033 381.186 5.09773L404.375 36L381.186 66.9023C379.014 69.7967 375.607 71.5 371.988 71.5H49.012C45.3933 71.5 41.9857 69.7967 39.8137 66.9023L16.6251 36L39.8137 5.09773Z"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>

      <div className="answerButtonContent">{props.children}</div>
    </div>
  );
}

export default AnswerButton;
