import { Product } from '../../types/Category'
import ProductCard from '../ProductCard/ProductCard'
import './CategoryPreview.css'
import { Link } from 'react-router-dom'

type CategoryPreviewProps = {
  category: string
  products: Product[]
}

function CategoryPreview({ category, products }: CategoryPreviewProps) {
  console.log(category)
  console.log(products)
  return (
    <div className='category-preview'>
      <Link
        to={`/shop/${category.toLowerCase()}`}
        className='category-preview__title'
      >
        <span>{category}</span>
        <span>&#10144;</span>
      </Link>
      <div className='category-preview__categories'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  )
}

export default CategoryPreview
