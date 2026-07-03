import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import "./App.css"
import Navbarr from './Components/Navbarr'
import HeaderInfo from './Components/HeaderInfo'
import TopBar from './Components/TopBar'
import MegaMenu from './Components/Megamenu'





function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <TopBar/>
  <HeaderInfo/>
  <Navbarr/>
  <MegaMenu/>
  </>
  )
}

export default App
