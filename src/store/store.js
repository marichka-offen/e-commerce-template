import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
)
const composeMiddleware = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeMiddleware)

export const persistor = persistStore(store)
