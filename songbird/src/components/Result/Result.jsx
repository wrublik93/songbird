import React from 'react';
import Lose from './Lose/Lose';
import Win from './Win/Win';
import './Result.scss';

function Result({
    setStatusGame,
    score,
    setScore,
}) {
    return (
        <div>
            {
                score < 30 && (
                    <Lose 
                        setStatusGame = {setStatusGame}
                        score = {score}
                        setScore = {setScore}
                    />
                )
            }
            {
                score === 30 && (
                    <Win 
                        setStatusGame = {setStatusGame}
                        setScore = {setScore}
                    />
                )
            }
        </div>
    )
};

export default Result;