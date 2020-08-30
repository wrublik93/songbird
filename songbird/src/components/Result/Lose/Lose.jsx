import React from 'react';
import './Lose.scss';

function Lose({
    setStatusGame,
    score,
    setScore,
}) {
    const text = score < 15 ? 'Плохо' : 'Вполне. Пробуй еще!'

    return (
        <div>
            <div>
                {text} <p>{score} из 30</p>
            </div>
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

export default Lose;