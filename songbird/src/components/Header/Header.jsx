import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import './Header.scss';
import logo from '../../assets/images/common/logo.png';

function Header ({
    score, 
    category, 
    currentBirdCategory
}) {
    const categories = category.map((category, i) => {
        const isActiveCategory = i === currentBirdCategory;

        return <CategoryItem 
                    category={category} 
                    key={category} 
                    isActiveCategory={isActiveCategory}
                />;
    });

    return (
        <header className="header">
            <div className="header-container">
                <img
                    className="header-logo" 
                    src={logo} 
                    alt="logo" 
                />
                <h2>
                    Баллы: <span>{score}</span>
                </h2>
            </div>
            <div className="header-nav">
                <ul className="header-list">
                    {categories}
                </ul>
            </div>
        </header>
    )
}

export default Header;