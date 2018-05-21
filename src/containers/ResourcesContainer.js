import React, {Component, PropTypes}  from 'react'
import { Link } from 'react-router-dom'

export default class ResourcesContainer extends Component {
  
  // static propTypes = {
  //   sortInvName: PropTypes.func.isRequired,
  //   sortInvAmount: PropTypes.func.isRequired,
  // }//proptypes

  render(){
    return (
      <div className='classicComponent'>
        <h1 className="headerText">
          <Link to='/'>I am the header text of this componentn!! - Resources</Link>
        </h1>
      </div>
    )//return
  }//render
}//Component