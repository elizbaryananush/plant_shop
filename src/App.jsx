import React from 'react'
import './App.css'
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Started from './components/Started/Started'
import Tabs from './components/Tabs/Tabs'
import Bl from './components/bl'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/started' Component={Started} />
          <Route path='/tabs' Component={Tabs} />
          <Route path='/bl' Component={Bl} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
