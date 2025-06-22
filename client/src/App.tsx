import './App.css'
import Login from './auth/Login'
import Signup from './auth/Signup'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'
import Navbar from './components/Navbar'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='reset-password' element={<ResetPassword />} />
        <Route path='verify-email' element={<VerifyEmail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
