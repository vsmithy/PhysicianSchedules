import React, {Component}  from 'react'

//import the right-menu components
import ShiftSelect from '../ShiftSelect'
import Stats from '../Stats'
import NotesComponent from '../NotesComponent'
import Conflicts from '../Conflicts'

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
  }//handle conflict toggle
  handleStatsToggle(){
    this.state.statsViewHeight === 0 ? this.setState({statsViewHeight: '10rem'}) : this.setState({statsViewHeight: 0})
  }//handle stats toggle

  render(){
    const { shifts, currentViewProperties, changeSelectedShft } = this.props
    return (
      <aside className="classicAside">
        <div className="classicSupportingInfo">
          <button role="switch" type="button" className="switchBtn" onClick={() => this.handleShiftToggle()}>Assign Shifts <i className="fas fa-chevron-down"></i></button>
          <ShiftSelect viewHeight={this.state.shiftViewHeight} shifts={shifts} currentViewProperties={currentViewProperties} changeSelectedShft={changeSelectedShft} />
          <button role="switch" type="button" className="switchBtn" onClick={() => this.handleConflictToggle()}>Assignment Conflicts <i className="fas fa-chevron-down"></i></button>
          <Conflicts viewHeight={this.state.conflictViewHeight} {...this.props} />
          <button role="switch" type="button" className="switchBtn" onClick={() => this.handleStatsToggle()}>Stats <i className="fas fa-chevron-down"></i></button>
          <Stats viewHeight={this.state.statsViewHeight} {...this.props} />
          <NotesComponent viewHeight={this.state.notesViewHeight}/>
        </div>
      </aside>
    )//return
  }//render
}//right mennu
