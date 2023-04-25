import { createSelector } from 'reselect'
import { UserState } from './userReducer'
import { RootState } from '../store'

export const selectUserReducer = (state: RootState): UserState => state.user

export const selectUser = createSelector(selectUserReducer, (user) => user.user)
