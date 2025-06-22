import './App.css'
import Login from './auth/Login'
import Signup from './auth/Signup'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainLayout from './components/MainLayout'
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
