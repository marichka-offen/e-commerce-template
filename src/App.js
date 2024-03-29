import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Navigation from './routes/Navigation'
import Home from './pages/Home/Home'
import Authentication from './pages/Authentication/Authentication'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'

import {
  onAuthStateChangeListener,
  createUserProfileDocument,
} from './utils/firebase'
import { setCurrentUser } from './store/user/userReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserProfileDocument(user)
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user)

      dispatch(setCurrentUser(pickedUser))
    })

    return unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App
