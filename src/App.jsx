import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Quiz from "./pages/quiz"
import Settings from "./pages/settings"

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/quiz' element={<Quiz />}></Route>
          <Route exact path='/settings' element={<Settings />}></Route>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
