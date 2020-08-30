import React from 'react';
import './Win.scss';

function Win({
    setStatusGame,
    setScore,
}) {
    return (
        <div>
            <div>Победа! Без ошибок!</div>
            <button
                onClick={
                    () => {
                        setScore(0);
                        setStatusGame(true);
                    }
                }
            >
                Начать сначала!
            </button>
        </div>
    )
}

export default Win;