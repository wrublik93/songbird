import React, {useState, useEffect} from 'react';
import './ChoosingAnswer.scss';
import correctAnswerSound from '../../../../assets/sounds/correct-answer.mp3';
import wrongAnswerSound from '../../../../assets/sounds/wrong-answer.mp3';

function PossibleAnswer({
  el,
  setUserSelect,
  currentItem,
  correctAnswer,
  setCorrectAnswer,
  currentBirdCategory,
  pointsRound,
  setPointsRound,
}) {
  const isCorrect = el.name === currentItem.name;
  
  const correctAudio = new Audio(correctAnswerSound);
  const wrongAudio = new Audio(wrongAnswerSound);
  
  const [answerSelected, setAnswerSelected] = useState(false);
  
  const indicatorColor = isCorrect ? `choosing-answer-true` : `choosing-answer-false`;
  const indicatorFinal = answerSelected ? `${indicatorColor} choosing-answer-indicator` : `choosing-answer-indicator`;
  
  useEffect(() => {
    setAnswerSelected(false);
  }, [currentBirdCategory]);
  
  return (
    <li
      className = "choosing-answer-item"
      onClick = {() => {
        setUserSelect(el);
        if (!correctAnswer) {
          if (isCorrect) {
            setCorrectAnswer(true);
            correctAudio.play();
          } else {
            if (!answerSelected)
              setPointsRound(pointsRound - 1);
              wrongAudio.play();
            }
          setAnswerSelected(true);
        }
      }}
    >
      <span className = {indicatorFinal}></span>
      {el.name}
    </li>
  );
}

export default PossibleAnswer;