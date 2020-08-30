import React from 'react';
import './CategoryItem.scss';

function CategoryItem({ category }) {
  return (
    <li className="categoryItem">
      <a>{category} </a>
    </li>
  );
}
export default CategoryItem;