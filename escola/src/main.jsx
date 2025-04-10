import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Dashboard from './components/dashboard'
import PrivateRoute from './components/privateRoute'
import Navbar from './components/navbar'
import AlunoCheckForm from './components/aluno/alunoCheckForm'
import './components/css/variables.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route element={<Navbar />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/aluno' element={<AlunoCheckForm />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
