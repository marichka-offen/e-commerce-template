import { configureStore, Middleware } from '@reduxjs/toolkit'
// @ts-ignore
import logger from 'redux-logger'
import { rootReducer } from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  (middleware): middleware is Middleware => Boolean(middleware)
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
})

export const persistor = persistStore(store)
