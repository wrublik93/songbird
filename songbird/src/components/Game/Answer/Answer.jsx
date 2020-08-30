import React from 'react';
import PossibleAnswer from './PossibleAnswer/PossibleAnswer';
import './Answer.scss';

function Answer({
    data,
    currentBirdCategory,
    setUserResponse,
    currentItem,
    correctAnswer,
    setCorrectAnswer,
    pointsRound,
    setPointsRound,
}) {
    const addAnswerOptions = data[currentBirdCategory].map((el) => {
        return (
            <PossibleAnswer 
                el={el}
                key={el.id}
                setUserResponse={setUserResponse}
                currentItem={currentItem}
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                currentBirdCategory={currentBirdCategory}
                pointsRound={pointsRound}
                setPointsRound={setPointsRound}
            />
        )
    })
    return (
        <div className="options">
            <ul className="list-answer">{addAnswerOptions}</ul>
        </div>
    )
};

export default Answer;