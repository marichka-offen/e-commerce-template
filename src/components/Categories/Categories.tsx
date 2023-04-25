import './Categories.css'
import { Category } from '../../types/types'
import CategoryItem from '../CategoryItem/CategoryItem'
import React from 'react'

function Categories() {
  const categories: Category[] = [
    {
      title: 'Hats',
      id: 1,
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      items: [],
    },
    {
      title: 'Jackets',
      id: 2,
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      items: [],
    },
    {
      title: 'Sneakers',
      id: 3,
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      items: [],
    },
    {
      title: 'Womens',
      id: 4,
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      items: [],
    },
    {
      title: 'Mens',
      id: 5,
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      items: [],
    },
  ]

  return (
    <div className='categories'>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Categories
