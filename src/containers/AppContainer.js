import React, { Component } from 'react'

//local files and imports
import ClassicContainer from './ClassicContainer'
import "../styles/styles.css"

function AppContainer(){
  return (
      <div className='appContainer'>
        <ClassicContainer />
      </div>      
    )//return
}//AppContainer

export default AppContainer