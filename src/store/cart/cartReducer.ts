import { createSlice } from '@reduxjs/toolkit'
import { CartProduct } from '../../types/types'

const addCartItem = (cartItems: CartProduct[], itemToAdd: CartProduct) => {
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

const removeCartItem = (
  cartItems: CartProduct[],
  itemToRemove: CartProduct
) => {
  const existingCartItem = cartItems.find((item) => item.id === itemToRemove.id)

  if (existingCartItem!.quantity === 1) {
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

const clearCart = (cartItems: CartProduct[], itemToRemoveId: number) => {
  return cartItems.filter((item) => item.id !== itemToRemoveId)
}

export type CartState = {
  readonly isCartOpen: boolean
  readonly cartItems: CartProduct[]
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload
    },
    toggleCart(state, action) {
      state.isCartOpen = !state.isCartOpen
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload)
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload)
    },
    clearItemsFromCart(state, action) {
      state.cartItems = clearCart(state.cartItems, action.payload)
    },
  },
})

export const {
  setCartItems,
  toggleCart,
  addItemToCart,
  removeItemFromCart,
  clearItemsFromCart,
} = cartSlice.actions

export const cartReducer = cartSlice.reducer
