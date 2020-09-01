import React from 'react';
import taskImage from '../../../assets/images/common/task-image.jpg';
import Player from '../../Player/Player';
import './Task.scss';

function Task({
    correctAnswer,
    currentItem,
}) {
    const birdName = correctAnswer ? `${currentItem.name}` : '******';
    const birdNameLatin = correctAnswer ? `${currentItem.nameLatin}` : '******';

    const birdImage = correctAnswer ? currentItem.image : taskImage;

    return (
        <div className = "task-container">
            <div className = "task-image-container">
                <div 
                    className = "task-image"
                    style = {{ backgroundImage: `url(${birdImage})` }}
                >
                </div>
            </div>
            <div className = "task-content">
                <div className = "task-bird-name">
                    {birdName}
                </div>
                <div className = "task-bird-name-latin">
                    {birdNameLatin}
                </div>
                <Player
                    audio = {currentItem.audio}
                    correctAnswer = {correctAnswer}
                />
            </div>
        </div>
    )
};

export default Task;