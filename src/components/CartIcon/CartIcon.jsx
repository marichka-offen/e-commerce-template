import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartCount,
  selectCartIsOpen,
} from '../../store/cart/cartSelector'
import { toggleCart } from '../../store/cart/cartAction'
import './CartIcon.css'

function CartIcon() {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const toggleIsCartOpen = () => dispatch(toggleCart(selectCartIsOpen))

  return (
    <div className='cart-icon' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='cart-icon__icon' />
      <span className='cart-icon__item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
