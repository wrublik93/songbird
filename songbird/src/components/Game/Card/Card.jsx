import React from 'react';
import Player from '../../Player/Player';
import './Card.scss';

function Card({
    userSelect,
}) {
    return (
        <div className = "card-container">
            <div className = "card-content-main">
                <div className = "card-content-main-image-container">
                    <div
                        className = "card-content-main-image"
                        style = {{ backgroundImage: `url(${userSelect.image})` }}
                    >
                    </div>
                </div>
                <div className = "card-content-main-info">
                    <p className = "card-name">
                        {userSelect.name}
                    </p>
                    <p className = "card-name-latin">
                        {userSelect.nameLatin}
                    </p>
                    <Player 
                        audio = {userSelect.audio}
                    />
                </div>
            </div>
            <div className = "card-specification">
                <div className = "card-band">
                    Отряд: {userSelect.band} ({userSelect.bandLatin})
                </div>
                <div className = "card-family">
                    Семейство: {userSelect.family} ({userSelect.familyLatin})
                </div>
                <div className = "card-weight">
                    Вес: {userSelect.weight}
                </div>
                <div className = "card-length">
                    Длина тела: {userSelect.length}
                </div>
                <div className = "card-wingspan">
                    Размах крыльев: {userSelect.wingspan}
                </div>
            </div>
            <div className = "card-description">
                {userSelect.description}
            </div>
        </div>
    )
};

export default Card;