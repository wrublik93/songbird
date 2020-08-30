import React from 'react';
import Player from '../../Player/Player';
import './Task.scss';

function Task({
    correctAnswer,
    currentItem,
}) {
    const birdName = currentItem.name;
    return (
        <div className="container">
            <div>картинка</div>
            <div>
                <p>{birdName}</p>
                <Player 
                    audio = {currentItem.audio}
                    correctAnswer = {correctAnswer}
                />
            </div>
        </div>
    )
};

export default Task;