import "./../scss/gamePage.scss";
import { useState, useEffect } from "react";
import data from "./../settings/data.json";
import AnswerButton from "../components/AnswerButton";
import GameStatus from "./../components/GameStatus";
import hamburger from "./../assets/hamburger.svg";

export interface Props {
  onGameOver: (score: string) => void;
}
export interface Answers {
  [key: string]: string;
}
export interface CurrentQuestion {
  question: string;
  answers: Answers;
  correctAnswers: Array<string>;
}
function Game(props: Props) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<Array<string>>([]);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState(false);
  const [showGameStatus, setShowGameStatus] = useState(false);
  const getFirstQuestion = () => {
    const firstQuestions = data.questions[questionNumber].questions;
    return firstQuestions.length > 1
      ? firstQuestions[Math.floor(Math.random() * firstQuestions.length)]
      : firstQuestions[0];
  };
  const [currentQuestion, setCurrentQuestion] = useState<CurrentQuestion>(
    getFirstQuestion()
  );
  useEffect(() => {
    isSelectedVariantslengthSamePosibleVariantsLength();
  }, [selectedVariants]);
  const getNewQuestion = (questionNumber: number) => {
    const questions = data.questions[questionNumber].questions;
    if (questions.length > 1) {
      const randomQuestionNumber = Math.floor(Math.random() * questions.length);
      return questions[randomQuestionNumber];
    }
    return questions[0];
  };

  const nextQuestion = () => {
    checkTheQuestionsOver();
    setSelectedVariants([]);
    setQuestionNumber(questionNumber + 1);
    setCurrentQuestion(getNewQuestion(questionNumber + 1));
  };

  const checkTheQuestionsOver = () => {
    if (data.questions.length - 1 === questionNumber) {
      props.onGameOver(data.questions[questionNumber].money);
    }
  };
  const toggleAnswer = (item: string) => {
    if (disabledButtons) return;
    if (selectedVariants.includes(item)) {
      setSelectedVariants((prevSelectedVariants) =>
        prevSelectedVariants.filter((el) => el !== item)
      );
    } else {
      setSelectedVariants((prevSelectedVariants) => [
        ...prevSelectedVariants,
        item,
      ]);
    }
  };
  const isSelectedVariantslengthSamePosibleVariantsLength = () => {
    if (selectedVariants.length === currentQuestion.correctAnswers.length) {
      checkAnswers();
    }
  };

  const checkAnswers = () => {
    setDisabledButtons(true);
    const sortedArr1 = selectedVariants.sort();
    const sortedArr2 = currentQuestion.correctAnswers.sort();
    const isCorrectAnswers = sortedArr1.every(
      (val, index) => val === sortedArr2[index]
    );
    setTimeout(() => {
      isCorrectAnswers ? showPositiveResult() : showNegativeResult();
    }, 2000);
  };
  const showPositiveResult = () => {
    setCorrectAnswers(true);
    setTimeout(() => {
      nextQuestion();
      setDisabledButtons(false);
      setCorrectAnswers(false);
    }, 2000);
  };
  const showNegativeResult = () => {
    setWrongAnswers(true);
    setTimeout(() => {
      props.onGameOver(findPreviousPriceQuestion());
      setWrongAnswers(false);
    }, 2000);
  };
  const findPreviousPriceQuestion = () => {
    return questionNumber > 0 ? data.questions[questionNumber - 1].money : "$0";
  };
  return (
    <div className="gamePage">
      <div className="gameBlock">
        <img
          className="hamburgerIcon"
          onClick={() => setShowGameStatus(true)}
          src={hamburger}
          alt=""
        />
        <div className="gameQuestion">{currentQuestion.question}</div>
        <div className="answerButtons">
          {currentQuestion.answers ? (
            <>
              {Object.keys(currentQuestion.answers as Answers).map((item) => (
                <AnswerButton
                  key={item}
                  onClick={() => toggleAnswer(item)}
                  disabled={disabledButtons}
                  selected={selectedVariants.includes(item)}
                  correct={correctAnswers && selectedVariants.includes(item)}
                  wrong={wrongAnswers && selectedVariants.includes(item)}
                >
                  <span className="letter">{item}</span>
                  <span className="question">
                    {currentQuestion.answers[item]}
                  </span>
                </AnswerButton>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <GameStatus
        priceList={data.questions.map((item) => item.money)}
        questionNumber={questionNumber}
        onClose={() => setShowGameStatus(false)}
        showGameStatus={showGameStatus}
      />
    </div>
  );
}

export default Game;
