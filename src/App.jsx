import React from 'react'
import './App.css'
import SideBar from './components/SideBarSection/SideBar'
import Body from './components/BodySection/Body/Body'

const App = () => {
  return (
    <div className="container">
      <SideBar />
      <Body />
    </div>
  )
}

export default App