import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Menu from './Menu'
import './style.css'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Menu/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App