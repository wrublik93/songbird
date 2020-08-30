import React from 'react';
import './Header.scss';
import CategoryItem from './CategoryItem/CategoryItem';

function Header ({score, category}) {
    const categories = category.map((category, i) => {
        return <CategoryItem category={category} key={category} />;
    });

    return (
        <header className="header">
            <div className="header-container">
                <h1>Songbird</h1>
                <h2>
                    score: <span>{score}</span>
                </h2>
            </div>
            <div className="nav">
                <ul className="list">{categories}</ul>
            </div>
        </header>
    )
}

export default Header;