import { createSelector } from 'reselect'
import { RootState } from '../store'
import { CategoriesState } from './categoriesReducer'
import { CategoryMap } from '../../types/Category'

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categories) => categories.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {} as CategoryMap)
)
