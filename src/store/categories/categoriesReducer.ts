import { createSlice } from '@reduxjs/toolkit'
import { Category } from '../../types/types'

export type CategoriesState = {
  readonly categories: Category[]
}

const initialState: CategoriesState = {
  categories: [],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload
    },
  },
})

export const { setCategories } = categoriesSlice.actions

export const categoriesReducer = categoriesSlice.reducer
