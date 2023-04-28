import './CategoryItem.css'
import { Category } from '../../types/types'
import { Link } from 'react-router-dom'
import React from 'react'

type categoryProps = {
  category: Category
}

function CategoryItem({ category: { imageUrl, title } }: categoryProps) {
  return (
    <Link
      to={`/shop/${title.toLowerCase()}`}
      className='category-item__container'
    >
      <div
        className='category-item__image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='category-item__text-box'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  )
}

export default CategoryItem
