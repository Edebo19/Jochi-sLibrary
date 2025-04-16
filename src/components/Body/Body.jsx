import React from 'react'
import WelcomeBody from './WelcomeBody'
import '../CSS/Body.css'
import CardBody from './CardBody'
import { useState } from 'react'
import 'animate.css';

const Body = () => {

  const copyRightYear = new Date().getFullYear()

  const [home, setHome] = useState(true)
  return (
    <div>
      {
        home === true ?
        <WelcomeBody setHome={setHome}/> :
      <CardBody setHome ={setHome}/>
      }
      <div className="copyRight">
            <p>Copyrights {copyRightYear} | Jochi's Library, All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Body