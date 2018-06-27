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


        <div role="presentation" style="background-color: lightblue;"  class="conflictsComponent">In nostrud amet laborum mollit. Labore magna amet adipisicing exercitation sit. Enim et aliqua cupidatat pariatur irure et occaecat quis labore eu anim culpa Lorem. Eiusmod elit sint nulla ea. In qui aliqua in nostrud irure nulla ut ea dolore anim incididunt consectetur deserunt.</div>