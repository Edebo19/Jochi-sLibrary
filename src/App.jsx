import React from 'react'
import "./App.css"
import Header from './components/Header/Header'
import Body from './components/Body/Body'


const App = () => {
  return (
    <div style={{background: "purple"}}>
      <Header/>
      <Body/>
    </div>
  )
}

export default App