import React from 'react';
import Player from '../../Player/Player';
import './Card.scss';

function Card({
    userResponse,
}) {
    return (
        <div className="card_container">
            <div className="card">
                <div
                    style={{ backgroundImage: `url(${userResponse.image})` }}
                    className="stub_picture"
                >
                </div>
                <div className="title_bird">
                    <p className="name">{userResponse.name}</p>
                    <p className="species">{userResponse.species}</p>
                    <Player 
                        audio={userResponse.audio}
                    />
                </div>
            </div>
            <div className="description">{userResponse.description}</div>
        </div>
    )
};

export default Card;