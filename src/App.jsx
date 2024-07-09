import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateItems from './pages/CreateItems'
const App = () => {
  return (
    <Routes>
     <Route path='/' element={<Home/>}></Route>
      <Route path='/items/create' element={<CreateItems/>}></Route>
    </Routes>
  )
}

export default App