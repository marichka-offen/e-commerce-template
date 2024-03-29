import './CartDropdown.css'
import { CartProduct } from '../../types/types'
import { selectCartItems } from '../../store/cart/cartSelector'
import { toggleCart } from '../../store/cart/cartReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import React from 'react'

const CartDropdown = () => {
  const dispatch = useDispatch()
  const cartItems: CartProduct[] = useSelector(selectCartItems)
  const closeCart = () => dispatch(toggleCart(false))

  const navigate = useNavigate()
  const goToCart = () => {
    navigate('/cart')
    closeCart()
  }

  return (
    <div className='cart-dropdown'>
      {cartItems.length === 0 ? (
        <div className='cart-dropdown__empty-message'>Your cart is empty</div>
      ) : (
        <div className='cart-dropdown__cart-items'>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      )}

      <Button text='Go to checkout' onClick={goToCart} />
    </div>
  )
}

export default CartDropdown
