import React from 'react';
import ChoosingAnswer from './ChoosingAnswer/ChoosingAnswer';
import './Answer.scss';

function Answer({
    data,
    currentBirdCategory,
    setUserSelect,
    currentItem,
    correctAnswer,
    setCorrectAnswer,
    pointsRound,
    setPointsRound,
}) {
    const addAnswerOptions = data[currentBirdCategory].map((el) => {
        return (
            <ChoosingAnswer
                key = {el.id} 
                el = {el}
                currentItem = {currentItem}
                correctAnswer = {correctAnswer}
                currentBirdCategory = {currentBirdCategory}
                pointsRound = {pointsRound}
                setUserSelect = {setUserSelect}
                setCorrectAnswer = {setCorrectAnswer}
                setPointsRound = {setPointsRound}
            />
        )
    })
    return (
        <div className="answer-variants-container">
            <ul className="answer-list">
                {addAnswerOptions}
            </ul>
        </div>
    )
};

export default Answer;