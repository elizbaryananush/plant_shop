import React from 'react'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Started from './components/Started/Started'
import Tabs from './components/Tabs/Tabs'
import Bl from './components/bl'
import Cart from './components/Cart/Cart'
import NavBar from './components/NavBar/NavBar'
import Info from './components/Info/Info'
import store from './redux'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/started' Component={Started} />
          <Route path='/tabs' Component={Tabs} />
          <Route path='/bl' Component={Bl} />
          <Route path='/cart' Component={Cart} />
          <Route path='/:category/:id' Component={Info} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
