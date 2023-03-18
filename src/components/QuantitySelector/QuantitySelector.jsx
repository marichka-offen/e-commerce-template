import { addItemToCart, removeItemFromCart } from '../../store/cart/cartAction'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cartSelector'
import './QuantitySelector.css'

function QuantitySelector({ product, small }) {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  const removeProductFromCart = () =>
    dispatch(removeItemFromCart(cartItems, product))

  return (
    <div
      className={`quantity-selector ${small ? 'quantity-selector--small' : ''}`}
    >
      <button
        className={`quantity-selector__arrow ${
          small ? 'quantity-selector__arrow--small' : ''
        }`}
        onClick={removeProductFromCart}
      >
        &#10094;
      </button>
      {product.quantity}
      <button
        className={`quantity-selector__arrow ${
          small ? 'quantity-selector__arrow--small' : ''
        }`}
        onClick={addProductToCart}
      >
        &#10095;
      </button>
    </div>
  )
}

export default QuantitySelector
