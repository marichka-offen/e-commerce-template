import { configureStore } from '@reduxjs/toolkit'
// import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './rootReducer'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
)

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose

// const composeMiddleware = composeEnhancer(applyMiddleware(...middleWares))

// export const store = createStore(persistedReducer, undefined, composeMiddleware)
export const store = configureStore({
  reducer: rootReducer,
  //   middleware: middleWares,
})

// export const persistor = persistStore(store)
