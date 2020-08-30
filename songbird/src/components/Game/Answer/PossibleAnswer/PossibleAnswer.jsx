import React, {useState, useEffect} from 'react';

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

    const [answerSelected, setAnswerSelected] = useState(false);
    useEffect(() => {
        setAnswerSelected(false);
      }, [currentBirdCategory]);

      return (
        <li
          className="item"
          onClick={() => {
            setUserResponse(el);
            if (!correctAnswer) {
              if (isCorrect) {
                setCorrectAnswer(true);
                
              } else {
                if (!answerSelected)
                  setPointsRound(pointsRound - 1);
              }
              setAnswerSelected(true);
            }
          }}
        >
          <span></span>
          {el.name}
        </li>
      );
}

export default PossibleAnswer;