import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import './CategoriesPreview.css'
import CategoryPreview from '../CategoryPreview/CategoryPreview'
import { selectCategoriesMap } from '../../store/categories/categoriesSelector'
import { CategoryMap } from '../../types/types'

function CategoriesPreview() {
  const categories: CategoryMap = useSelector(selectCategoriesMap)

  return (
    <div className='categories-preview'>
      {Object.keys(categories).map((category) => (
        <Fragment key={category}>
          <CategoryPreview
            category={category}
            products={categories[category]}
          />
        </Fragment>
      ))}
    </div>
  )
}

export default CategoriesPreview
