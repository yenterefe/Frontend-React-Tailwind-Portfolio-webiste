import { useState } from "react";

import './App.css'
import NavBar from './Components/NavBar'
import Main from './Components/Main'
import Buttons from './Components/Buttons'
import Footer from './Components/Footer'

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <NavBar />
      <Main />
      <Buttons />
      <Footer />
    </>
  )
}

export default App
