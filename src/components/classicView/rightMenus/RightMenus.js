import React, {Component}  from 'react'

//import the right-menu components
import ShiftSelect from './ShiftSelect'
import Stats from './Stats'
import NotesComponent from './NotesComponent'
import Conflicts from './Conflicts'


export default class RightMenus extends Component {
  constructor(props){
    super(props)

    this.state = {
      shiftViewToggle: "shiftComponent closed",
      conflictViewToggle: "conflictsComponent closed",
      statsViewToggle: "statsComponent closed",
    }//state
  }//constructor

  //toggle the various menus
  handleToggle(whichItem){
    switch(whichItem){
      case 'shift':
        this.state.shiftViewToggle === "shiftComponent closed" ? this.setState({shiftViewToggle: "shiftComponent"}) : this.setState({shiftViewToggle: "shiftComponent closed"})
        break
      case 'conflict':
        this.state.conflictViewToggle === "conflictsComponent closed" ? this.setState({conflictViewToggle: 'conflictsComponent'}) : this.setState({conflictViewToggle: "conflictsComponent closed"})
        break
      case 'stats':
        this.state.statsViewToggle === "statsComponent closed" ? this.setState({statsViewToggle: "statsComponent"}) : this.setState({statsViewToggle: "statsComponent closed"})
        break
      default:
        this.state.statsViewToggle === "statsComponent closed" ? this.setState({statsViewToggle: "statsComponent"}) : this.setState({statsViewToggle: "statsComponent closed"})
    }//switch
  }//handleToggle

  render(){
    return (
      <aside className="classicAside">
        <div className="classicSupportingInfo">
          <button role="switch" type="button" className="switchBtn" onClick={() => this.handleToggle('shift')}>Assign Shifts <i className={this.state.shiftViewToggle === "shiftComponent closed" ? "fas fa-chevron-down" : "fas fa-chevron-down rotated"}></i></button>
          <ShiftSelect 
            viewHeight={this.state.shiftViewToggle} 
            shifts={this.props.shifts} 
            changeSelectedShft={this.props.changeSelectedShft} 
            />
          <button role="switch" type="button" className="switchBtn" onClick={() => this.handleToggle('conflict')}>Assignment Conflicts <i className={this.state.conflictViewToggle === "conflictsComponent closed" ? "fas fa-chevron-down" : "fas fa-chevron-down rotated"}></i></button>
          <Conflicts 
            viewHeight={this.state.conflictViewToggle} 
            conflicts={this.props.conflicts} 
            />
          <button role="switch" type="button" className="switchBtn" onClick={() => this.handleToggle('stats')}>Stats <i className={this.state.statsViewToggle === "statsComponent closed" ? "fas fa-chevron-down" : "fas fa-chevron-down rotated"}></i></button>
          <Stats 
            viewHeight={this.state.statsViewToggle} 
            stats={this.props.stats}  
            />
          <NotesComponent 
            notes={this.props.notes} 
            addNote={this.props.addNote} 
            removeNote={this.props.removeNote} 
            />
        </div>
      </aside>
    )//return
  }//render
}//right mennu