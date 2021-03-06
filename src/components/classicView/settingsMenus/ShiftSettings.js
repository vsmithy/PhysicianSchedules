import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CurrSettingsContext } from '../../../containers/ClassicContainer'

class ShiftSettings extends Component {
  constructor(props){
    super(props)

    this.shiftInputForm = React.createRef()
    this.shiftInput = React.createRef()
    this.makeNewShift = this.makeNewShift.bind(this)
    this.hideSettings = this.hideSettings.bind(this)
  }//constructor

  makeNewShift(event){
    event.preventDefault()

    //add the shift
    this.props.addShift(this.shiftInput.current.value)

    //clear out the input box
    this.shiftInput.current.value = ''
  }//makeNewShift

  hideSettings(context){
    //toggleModal
    context.updaterFunctions.toggleModal()
  
    //toggleMenu
    context.updaterFunctions.toggleShiftSettings()
  }//hideSettings

  render() {
    return (
      <CurrSettingsContext.Consumer>
        {context => (
          <div className={this.props.viewChoice}>
            <h1>Edit Shifts</h1>
            <form ref={this.shiftInputForm} className="editShiftInputArea" onSubmit={(e) => this.makeNewShift(e)}>
              <input 
                type="text" 
                name="shiftInput" 
                placeholder="add shift type" 
                ref={this.shiftInput}
              />
              <button role="submit" onClick={(e) => this.makeNewShift(e)}>Add</button>
            </form>
            <div className="editShiftList">
            {this.props.shifts.sort( (a, b) => a.shiftName < b.shiftName ? -1 : 1).map(shiftItem => <div key={shiftItem.id} className="editShiftListItem">{shiftItem.shiftName}<i className="fas fa-times exitIcon" onClick={() => this.props.removeShift(shiftItem.id)}></i></div>)}
            </div>
            <button onClick={() => this.hideSettings(context)} className="closeEditShiftsBtn">Close</button>
          </div>
        )}
      </CurrSettingsContext.Consumer>
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