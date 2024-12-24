import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Page404 from './pages/Page404'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
    </>
  )
}

export default App;
