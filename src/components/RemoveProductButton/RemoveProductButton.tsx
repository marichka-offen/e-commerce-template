import { useDispatch } from 'react-redux'
import { clearItemsFromCart } from '../../store/cart/cartReducer'
import './RemoveProductButton.css'
import React from 'react'

type RemoveProductButtonProps = {
  id: string
  small?: boolean
}

function RemoveProductButton({ id, small }: RemoveProductButtonProps) {
  const dispatch = useDispatch()

  const removeProduct = () => dispatch(clearItemsFromCart(id))
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
