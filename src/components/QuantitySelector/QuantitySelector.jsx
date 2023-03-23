import { addItemToCart, removeItemFromCart } from '../../store/cart/cartReducer'
import { useDispatch } from 'react-redux'
import './QuantitySelector.css'

function QuantitySelector({ product, small }) {
  const dispatch = useDispatch()
  const addProductToCart = () => dispatch(addItemToCart(product))

  const removeProductFromCart = () => dispatch(removeItemFromCart(product))

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
