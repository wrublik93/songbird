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
    return (
        <button
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
            Next
        </button>
    )
};

export default Button;