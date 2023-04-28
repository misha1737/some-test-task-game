import "./../scss/questionPrice.scss";
interface Props {
  children: React.ReactNode;
  active: boolean;
  done: boolean;
}
function QuestionPrice(props: Props) {
  return (
    <div
      className={`questionPrice ${props.active ? "active" : ""} ${
        props.done ? "done" : ""
      }`}
    >
      <svg
        className="questionPriceSvg"
        width="376"
        height="40"
        viewBox="0 0 376 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M69 20H0" stroke="currentColor" />
        <path d="M376 20H307" stroke="currentColor" />
        <path
          d="M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>

      <div className="questionPriceContent">{props.children}</div>
    </div>
  );
}

export default QuestionPrice;
