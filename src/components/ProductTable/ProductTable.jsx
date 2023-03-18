import { selectCartItems, selectCartTotal } from '../../store/cart/cartSelector'
import { useSelector } from 'react-redux'

import ProductTableItem from '../ProductTableItem/ProductTableItem'
import ProductTableHeader from '../ProductTableHeader/ProductTableHeader'
import './ProductTable.css'

function ProductTable() {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  return (
    <div className='product-table'>
      <ProductTableHeader />

      {cartItems.length === 0 ? (
        <div className='product-table__empty-message'>Your cart is empty</div>
      ) : (
        <div>
          {cartItems.map((cartItem) => (
            <ProductTableItem cartItem={cartItem} key={cartItem.id} />
          ))}
          <div className='product-table__total'>Total: ${cartTotal}</div>
        </div>
      )}
    </div>
  )
}

export default ProductTable
