import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { removeNote } from '../../../actions';

class ShiftSettings extends Component {
  constructor(props){
    super(props)

    this.shiftInput = React.createRef()
    this.makeNewShift = this.makeNewShift.bind(this)
    this.hideSettings = this.hideSettings.bind(this)
  }//constructor

  makeNewShift(){
    //add the shift
    this.props.addShift(this.shiftInput.current.value)

    //clear out the input box
    this.shiftInput.current.value = ''
  }//makeNewShift

  hideSettings(){
    //hides the modal and the settings window
    this.props.toggleModal()

    // context.updaterFunctions.toggleModal()

    
    this.props.toggleShiftSettingsWindow()
  }//hideSettings

  render() {
    return (
      <div className={this.props.viewChoice}>
        <h1>Edit Shifts</h1>
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
        {this.props.shifts.sort( (a, b) => a.shiftName < b.shiftName ? -1 : 1).map(shiftItem => <div key={shiftItem.id} className="editShiftListItem">{shiftItem.shiftName}<i className="fas fa-times exitIcon" onClick={() => this.props.removeShift(shiftItem.id)}></i></div>)}
        </div>
        <button onClick={() => this.hideSettings()} className="closeEditShiftsBtn">Close</button>
      </div>
    )
  }//render
}//shiftSettings

ShiftSettings.propTypes = {
  viewChoice: PropTypes.string.isRequired,
  shifts: PropTypes.array.isRequired,
  addShift: PropTypes.func,
  removeShift: PropTypes.func
}//propTypes

export default ShiftSettings