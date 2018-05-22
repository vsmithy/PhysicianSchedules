import React, {Component}  from 'react'
import { Link } from 'react-router'

export default class ClassName extends Component {
  render(){
    return (
      <div className='classicComponent'>
        <h1 className="headerText">
          <Link to='/'>I am the header text of this componentn!!</Link>
        </h1>
      </div>
    )//return
  }//render
}//Component