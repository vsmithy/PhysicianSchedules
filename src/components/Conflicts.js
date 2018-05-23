import React, {Component}  from 'react'

export default class Conflicts extends Component {
  render(){
    const { viewHeight, conflicts } = this.props
    const defaultStyle = {
      transition: 'height 125ms ease-in-out',
      height: viewHeight, 
    }
    return (
      <section className='conflicts' style={defaultStyle}>
        <ul>
          {conflicts.map(item => <li className={viewHeight === 0 ? 'conflictListNone' : 'conflictList'} key={item.id}>{item.eventDate.getMonth() + '/' + item.eventDate.getDate()} - {item.note}</li>)}
        </ul>
      </section>
    )//return
  }//render
}//Component