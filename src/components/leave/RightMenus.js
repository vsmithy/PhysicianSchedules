import React, {Component}  from 'react'

//import the right-menu components
import Stats from '../Stats'
import NotesComponent from '../NotesComponent'

export default class RightMenus extends Component {
  constructor(props){
    super(props)

    this.state = {
      shiftViewHeight: 0,
      conflictViewHeight: 0,
      statsViewHeight: 0,
      notesViewHeight: 0,
    }
  }

  //toggle the right menus
  handleShiftToggle(){
    this.state.shiftViewHeight === 0 ? this.setState({shiftViewHeight: '10rem'}) : this.setState({shiftViewHeight: 0})
  }//handle shift toggle
  handleConflictToggle(){
    this.state.conflictViewHeight === 0 ? this.setState({conflictViewHeight: '10rem'}) : this.setState({conflictViewHeight: 0})
  }//handle shift toggle
  handleStatsToggle(){
    this.state.statsViewHeight === 0 ? this.setState({statsViewHeight: '10rem'}) : this.setState({statsViewHeight: 0})
  }//handle shift toggle
  handleNotesToggle(){
    this.state.notesViewHeight === 0 ? this.setState({notesViewHeight: '20rem'}) : this.setState({notesViewHeight: 0})
  }//handle shift toggle

  render(){
    const { shifts, currentViewProperties, changeSelectedShft } = this.props
    return (
      <aside className='rightMenus'>
        <div className='leaveBtnBkg'><button className='assgnLeaveBtn'>Assign Leave</button></div>
        <button className='expandToggle' onClick={() => this.handleStatsToggle()}>Stats</button>
        <Stats viewHeight={this.state.statsViewHeight} {...this.props} />
        <button className='expandToggle' onClick={() => this.handleNotesToggle()}>Notes</button>
        <NotesComponent viewHeight={this.state.notesViewHeight}/>
      </aside>
    )//return
  }//render
}//right mennu

