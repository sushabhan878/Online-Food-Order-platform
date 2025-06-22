import './App.css'
import Login from './auth/Login'
import Signup from './auth/Signup'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}/>
          <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='reset-password' element={<ResetPassword/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
