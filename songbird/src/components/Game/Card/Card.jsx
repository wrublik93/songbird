import React from 'react';
import Player from '../../Player/Player';
import './Card.scss';

function Card({
    userResponse,
}) {
    return (
        <div className="container">
            <div className="card">
                <div>
                    Картинка
                </div>
                <div>
                    <p>{userResponse.name}</p>
                    <p>{userResponse.species}</p>
                    <Player 
                        audio={userResponse.audio}
                    />
                </div>
            </div>
            <div>{userResponse.description}</div>
        </div>
    )
};

export default Card;