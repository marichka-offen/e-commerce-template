import { useDispatch, useSelector } from 'react-redux'
import { clearItemsFromCart } from '../../store/cart/cartAction'
import { selectCartItems } from '../../store/cart/cartSelector'
import './RemoveProductButton.css'

function RemoveProductButton({ id, small }) {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const removeProduct = () => dispatch(clearItemsFromCart(cartItems, id))
  return (
    <button
      className={`remove-product-button ${
        small ? 'remove-product-button--small' : ''
      }`}
      onClick={removeProduct}
    >
      &#10005;
    </button>
  )
}

export default RemoveProductButton
