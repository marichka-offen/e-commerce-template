import Button from '../Button/Button'
import './ProductCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cartAction'
import { selectCartItems } from '../../store/cart/cartSelector'

function ProductCard({ product }) {
  const { name, price, imageUrl } = product

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <div className='product-card'>
      <img src={imageUrl} alt={name} className='product-card__image' />
      <div className='product-card__footer'>
        <span className='product-card__name'>{name}</span>
        <span className='product-card__price'>${price}</span>
      </div>
      <Button
        buttonType='inverted'
        text='Add to cart'
        onClick={addProductToCart}
      />
    </div>
  )
}

export default ProductCard
