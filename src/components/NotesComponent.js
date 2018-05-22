import React, {Component}  from 'react'

export default class NotesComponent extends Component {
  render(){
    const { viewHeight } = this.props

    const defaultStyle = {
      transition: 'height 125ms ease-in-out',
      height: viewHeight, 
    }

    return (
      <section className='notesComponent' style={defaultStyle}>
        I am the header text of notes componentn!!
      </section>
    )//return
  }//render
}//Component