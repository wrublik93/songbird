import React from 'react';
import './Button.scss';

function Button({
    setStatusGame,
    currentBirdCategory,
    setCurrentBirdCategory,
    setUserResponse,
    setPointsRound,
    correctAnswer,
}) {
    const buttonStyle = correctAnswer ? 'button_active' : 'button';
    return (
        <button
            className={buttonStyle}
            onClick={() => {
                if(correctAnswer) {
                    if(currentBirdCategory < 5) {
                        setCurrentBirdCategory(currentBirdCategory + 1)
                    } else {
                        setStatusGame(false);
                        setCurrentBirdCategory(0);
                    }
                    setUserResponse('');
                    setPointsRound(5);
                }
            }}
        >
            Следующий уровень
        </button>
    )
};

export default Button;