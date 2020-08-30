import React, {useState, useEffect} from 'react';
import './PossibleAnswer.scss';
import correctAnswerSound from '../../../../assets/sounds/correct-answer.mp3';
import wrongAnswerSound from '../../../../assets/sounds/wrong-answer.mp3';

function PossibleAnswer({
    el,
  setUserResponse,
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
    useEffect(() => {
        setAnswerSelected(false);
      }, [currentBirdCategory]);

      const indicatorColor = isCorrect ? `success` : `err`;

  const indicatorAppearance = answerSelected
    ? `${indicatorColor} indicator`
    : `indicator`;


      return (
        <li
          className="item"
          onClick={() => {
            setUserResponse(el);
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
          <span className={indicatorAppearance}></span>
          {el.name}
        </li>
      );
}

export default PossibleAnswer;