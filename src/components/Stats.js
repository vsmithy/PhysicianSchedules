import React, {Component}  from 'react'

export default class Stats extends Component {
  render(){
    const { viewHeight } = this.props
    const defaultStyle = {
      transition: 'height 125ms ease-in-out',
      height: viewHeight, 
    }

    return (
      <section className='stats' style={defaultStyle}>
        I am the header text of stats componentn!!
      </section>
    )//return
  }//render
}//Component