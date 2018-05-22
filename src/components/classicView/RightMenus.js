import React, {Component}  from 'react'

//import the right-menu components
import ShiftSelect from '../ShiftSelect'
import Stats from '../Stats'
import NotesComponent from '../NotesComponent'
import Conflicts from '../Conflicts'

export default class RightMenus extends Component {
  render(){
    return (
      <aside className='rightMenus'>
        <button className='expandToggle'>Add Shifts</button>
        <ShiftSelect />
        <button className='expandToggle'>Assignment Conflicts</button>
        <Conflicts />
        <button className='expandToggle'>Stats</button>
        <Stats />
        <button className='expandToggle'>Notes</button>
        <NotesComponent />
      </aside>
    )//return
  }//render
}//right mennu

