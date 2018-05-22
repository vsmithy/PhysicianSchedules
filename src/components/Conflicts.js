import React, {Component}  from 'react'

export default class Conflicts extends Component {
  render(){
    const { viewHeight } = this.props
    const defaultStyle = {
      transition: 'height 125ms ease-in-out',
      height: viewHeight, 
    }
    return (
      <section className='conflicts' style={defaultStyle}>
        I am the header text of conflicts componentn!!
      </section>
    )//return
  }//render
}//Component