import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './Haba/Acceuil'
import Navbar from './components/navbar/Navbars'
import BootstrapBundle from './components/magic/BootstrapBundle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <Home/>
       <BootstrapBundle/>
    </>
  )
}

export default App
