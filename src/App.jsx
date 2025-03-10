import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Signin from './components/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Signin/>
      </div>
    </>
  )
}

export default App
