import React, {Component} from 'react'

//other commponents
import Header from '../classicView/Header'
import RightMenus from './RightMenus'
import Grid from './Grid'

export default class Leave extends Component {
  render(){
    return (
      <div className='leaveContainer'>
        <Header {...this.props} />
        <main className='gridStats'>
          <Grid {...this.props} />
          <RightMenus {...this.props} />
        </main>
      </div>
    )//return
  }//render
}//Leave Component
