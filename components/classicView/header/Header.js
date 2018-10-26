import React from 'react'
import ClassicNavCal from './ClassicNavCal'
import Dropdown from './Dropdown'

function Header(){
  return (
    <header>
      <div className="viewSelectBtns">
        <button type="button" className="viewSelectBtn active"><i className="fas fa-th fa-2x"></i></button>
        <button type="button" className="viewSelectBtn"><i className="far fa-calendar-alt fa-2x"></i></button>
      </div>
      <div className="headerDateSelector">
        <ClassicNavCal />
        <Dropdown />
      </div>
    </header>
  )//return
}//header

export default Header