import React from 'react';
import './CategoryItem.scss';

function CategoryItem({ 
  category, 
  isActiveCategory 
}) {
  const activeStyle = isActiveCategory ? `link active` : `link`
  return (
    <li className={activeStyle}>
      <a>{category} </a>
    </li>
  );
}
export default CategoryItem;