import React from 'react';
import './Button.scss';

function Button({
    setStatusGame,
    currentBirdCategory,
    setCurrentBirdCategory,
    setUserSelect,
    setPointsRound,
    correctAnswer,
}) {
    const buttonStyle = correctAnswer ? 'button-active' : 'button';

    return (
        <button
            className = {buttonStyle}
            onClick = {() => {
                if(correctAnswer) {
                    if(currentBirdCategory < 5) {
                        setCurrentBirdCategory(currentBirdCategory + 1)
                    } else {
                        setStatusGame(false);
                        setCurrentBirdCategory(0);
                    }
                    setUserSelect('');
                    setPointsRound(5);
                }
            }}
        >
            Следующий уровень
        </button>
    )
};

export default Button;