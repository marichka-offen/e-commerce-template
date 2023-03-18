import { cartActionTypes } from './cartTypes'

const initialState = {
  isCartOpen: false,
  cartItems: [],
  //   cartItemsQuantity: 0,
  //   cartTotal: 0,
}

export const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case cartActionTypes.SET_CART_ITEMS:
      return { ...state, ...action.payload }
    case cartActionTypes.TOGGLE_CART:
      return { ...state, isCartOpen: !state.isCartOpen }
    // case cartActionTypes.ADD_ITEM:
    //   return { ...state, cartItems: action.payload }
    // case cartActionTypes.REMOVE_ITEM:
    //   return { ...state, cartItems: action.payload }
    // case cartActionTypes.REMOVE_PRODUCT:
    //   return { ...state, cartItems: action.payload }
    default:
      return state
  }
}
