import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '../../utils/firebase'

export type UserState = {
  readonly user: UserData | null
}

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.user = action.payload
    },
  },
})

export const { setCurrentUser } = userSlice.actions
export const userReducer = userSlice.reducer
