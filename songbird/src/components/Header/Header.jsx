import React from 'react';
import './Header.scss';
import logo from '../../assets/images/common/logo.png';
import CategoryItem from './CategoryItem/CategoryItem';

function Header ({score, category, currentBirdCategory}) {
    const categories = category.map((category, i) => {
        const isActiveCategory = i === currentBirdCategory;
        return <CategoryItem category={category} key={category} isActiveCategory={isActiveCategory}/>;
    });

    return (
        <header className="header">
            <div className="header-container">
                <img src={logo} alt="logo" width="200" height="70"/>
                <h2>
                    Баллы: <span>{score}</span>
                </h2>
            </div>
            <div className="nav">
                <ul className="list-header">{categories}</ul>
            </div>
        </header>
    )
}

export default Header;