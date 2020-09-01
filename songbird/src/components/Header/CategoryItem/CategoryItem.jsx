import React from 'react';
import './CategoryItem.scss';

function CategoryItem({ 
  category, 
  isActiveCategory 
}) {
  const activeCategoryStyle = isActiveCategory ? `category-link category-active` : `category-link`
  return (
    <li className={activeCategoryStyle}>
      <a>{category}</a>
    </li>
  );
}
export default CategoryItem;