import React from 'react';
import superSmile from '../../../assets/images/smiles/super.png';
import winSound from '../../../assets/sounds/win.mp3';
import './Win.scss';

function Win({
    setStatusGame,
    score,
    setScore,
}) {
    const audio = new Audio(winSound);
    audio.play();
    return (
        <div>
            <div className="result-win-container">
                <div>
                    Воу-воу-воу! Чистая победа!!! Или вы все-таки орнитолог?
                </div>
                <div className="result-lose-image">
                    <img 
                        src={superSmile} 
                        alt="logo" 
                        width="270" 
                        height="230"    
                    />
                </div>
                <div>Ваш результат: {score} из 30!</div>
            </div>
            <button
                className="button-active"
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