import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
