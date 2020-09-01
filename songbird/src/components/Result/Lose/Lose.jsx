import React from 'react';
import './Lose.scss';
import sad from '../../../assets/images/smiles/sad.png';
import normal from '../../../assets/images/smiles/normal.png';
import nice from '../../../assets/images/smiles/nice.png';
import loseSound from '../../../assets/sounds/lose.mp3';

function Lose({
    setStatusGame,
    score,
    setScore,
}) {
    const audio = new Audio(loseSound);
    audio.play();
    const text = score < 10 ? 
        'Очень плохой результат, Вам следует чаще бывать на природе, а не за компьютером! Попробуйте ещё раз!' : 
        score < 20 ? 'Вполне себе неплохой результат, но пока он еще далек от идеала! Попробуйте ещё раз!' :
        score < 30 ? 'Ух, еще немного поднажать и будет победа! Так держать! Попробуйте ещё раз!' : '';
    
    const smile = score < 10 ? sad : score < 20 ? normal : nice;

    return (
        <div>
            <div className="result-lose-container">
                <div>{text}</div>
                <div className="result-lose-image">
                    <img 
                        src={smile} 
                        alt="logo" 
                        width="250" 
                        height="200"    
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

export default Lose;