import QuantitySelector from '../QuantitySelector/QuantitySelector'
import './ProductTableItem.css'
import RemoveProductButton from '../RemoveProductButton/RemoveProductButton'
import React from 'react'
import { CartProduct } from '../../types/types'

type ProductTableItemProps = {
  cartItem: CartProduct
}

function ProductTableItem({ cartItem }: ProductTableItemProps) {
  const { id, imageUrl, name, price } = cartItem
  return (
    <div className='product-table-item'>
      <img src={imageUrl} alt={name} className='product-table-item__image' />
      <div>{name}</div>

      <QuantitySelector product={cartItem} />

      <div>${price}</div>

      <RemoveProductButton id={id} />
    </div>
  )
}

export default ProductTableItem
