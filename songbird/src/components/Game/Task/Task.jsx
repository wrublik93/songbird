import React from 'react';
import taskImage from '../../../assets/images/common/task-image.jpg';
import Player from '../../Player/Player';
import './Task.scss';

function Task({
    correctAnswer,
    currentItem,
}) {
    const birdName = correctAnswer ? currentItem.name : '******';
    const birdImage = correctAnswer ? currentItem.image : taskImage;

    const styleTask = `question title_song`
    return (
        <div className="task_container">
            <div 
                style={{ backgroundImage: `url(${birdImage})` }}
                className="stub_picture"
            >

            </div>
            <div className={styleTask}>
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