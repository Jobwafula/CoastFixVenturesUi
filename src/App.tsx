import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './pages/Home'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
} 

export default App