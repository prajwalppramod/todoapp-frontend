import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Signin from './components/Signin'
import { Routes, Route } from 'react-router-dom/dist'
import Todo from './components/Todo'
import ErrorPage from './components/ErrorPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/addtodo' element={<Todo/>}/>
          <Route path='/error' element={<ErrorPage/>}/>
        </Routes>
        
      </div>
    </>
  )
}

export default App
