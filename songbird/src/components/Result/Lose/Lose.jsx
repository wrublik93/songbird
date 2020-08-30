import React from 'react';
import './Lose.scss';

function Lose({
    setStatusGame,
    score,
    setScore,
}) {
    const text = score < 15 ? 'Вы набрали меньше половины баллов! Пробуйте еще!' : 'Вы набрали больше половины баллов! Пробуйте еще!'

    return (
        <div>
            <div className="task_container">
                <div>{text}</div>
                <div>Ваш результат: {score} из 30!</div>
            </div>
            <button
                className="button_active"
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