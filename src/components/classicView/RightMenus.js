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
      shiftViewToggle: "shiftComponent closed",
      conflictViewToggle: "conflictsComponent closed",
      statsViewToggle: "statsComponent closed",
    }
  }

  //toggle the right menus
  handleShiftToggle(){
    // console.log('currently: ' + this.state.shiftViewToggle)
    this.state.shiftViewToggle === "shiftComponent closed" ? this.setState({shiftViewToggle: "shiftComponent"}) : this.setState({shiftViewToggle: "shiftComponent closed"})
  }//handle shift toggle
  handleConflictToggle(){
    this.state.conflictViewToggle === "conflictsComponent closed" ? this.setState({conflictViewToggle: 'conflictsComponent'}) : this.setState({conflictViewToggle: "conflictsComponent closed"})
  }//handle conflict toggle
  handleStatsToggle(){
    this.state.statsViewToggle === "statsComponent closed" ? this.setState({statsViewToggle: "statsComponent"}) : this.setState({statsViewToggle: "statsComponent closed"})
  }//handle stats toggle

  render(){
    const { shifts, currentViewProperties, changeSelectedShft } = this.props
    return (
      <aside className="classicAside">
        <div className="classicSupportingInfo">
          <button role="switch" type="button" className="switchBtn" onClick={() => this.handleShiftToggle()}>Assign Shifts <i className="fas fa-chevron-down"></i></button>
          <ShiftSelect viewHeight={this.state.shiftViewToggle} shifts={shifts} currentViewProperties={currentViewProperties} changeSelectedShft={changeSelectedShft} />
          <button role="switch" type="button" className="switchBtn" onClick={() => this.handleConflictToggle()}>Assignment Conflicts <i className="fas fa-chevron-down"></i></button>
          <Conflicts viewHeight={this.state.conflictViewToggle} {...this.props} />
          <button role="switch" type="button" className="switchBtn" onClick={() => this.handleStatsToggle()}>Stats <i className="fas fa-chevron-down"></i></button>
          <Stats viewHeight={this.state.statsViewToggle} {...this.props} />
          <NotesComponent {...this.props}/>
        </div>
      </aside>
    )//return
  }//render
}//right mennu
