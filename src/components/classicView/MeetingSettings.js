import React, { Component } from 'react'

class MeetingSettings extends Component {
  constructor(props){
    super(props)

    this.shiftInput = React.createRef()
    this.makeNewShift = this.makeNewShift.bind(this)
    this.hideSettings = this.hideSettings.bind(this)
  }

  makeNewShift(){
    //add the shift
    this.props.addShift(this.shiftInput.current.value)

    //clear out the input box
    this.shiftInput.current.value = ''
  }

  hideSettings(){
    //hides the modal and the settings window
    this.props.toggleModal()
    this.props.toggleMeetingSettingsWindow()
  }

  render() {
    return (
      <div className={this.props.viewChoice}>
        <h1>Edit Meetings</h1>
        <div className="editShiftInputArea">
          <input 
            type="text" 
            name="shiftInput" 
            placeholder="add shift type" 
            ref={this.shiftInput}
          />
          <button role="button" onClick={() => this.makeNewShift()}>Add</button>
        </div>
        <div role="presentation" className="editShiftList">
          {this.props.meetings.map(mtg => <div key={mtg.id}>{mtg.id} - {mtg.data}<i className="fas fa-times exitIcon"></i></div>)}
        </div>
        <button onClick={() => this.hideSettings()} className="closeEditShiftsBtn">Close</button>
      </div>
    )
  }//render
}//MeetingSettings

export default MeetingSettings