import { cartActionTypes } from './cartTypes'

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToAdd.id)

  if (existingCartItem) {
    const newCart = cartItems.map((item) =>
      item.id === itemToAdd.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )

    return newCart
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToRemove.id)

  if (existingCartItem.quantity === 1) {
    return clearCart(cartItems, itemToRemove.id)
  }

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  }

  return [...cartItems, { ...itemToRemove, quantity: 1 }]
}

const clearCart = (cartItems, itemToRemoveId) => {
  return cartItems.filter((item) => item.id !== itemToRemoveId)
}

export const toggleCart = (boolean) => ({
  type: cartActionTypes.TOGGLE_CART,
  payload: boolean,
})

export const addItemToCart = (cartItems, itemToAdd) => {
  const newCartItems = addCartItem(cartItems, itemToAdd)
  return { type: cartActionTypes.SET_CART_ITEMS, payload: newCartItems }
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const newCartItems = removeCartItem(cartItems, itemToRemove)
  return { type: cartActionTypes.SET_CART_ITEMS, payload: newCartItems }
}

export const clearItemsFromCart = (cartItems, itemToRemoveId) => {
  const newCartItems = clearCart(cartItems, itemToRemoveId)
  return { type: cartActionTypes.SET_CART_ITEMS, payload: newCartItems }
}
