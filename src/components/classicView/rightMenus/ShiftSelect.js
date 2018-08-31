import React, {Component}  from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//local files and components
import * as actionCreators from '../../../actions'

class ShiftSelect extends Component {
  constructor(props){
    super(props)

    this.handleShiftChange = this.handleShiftChange.bind(this)
    this.state = {
      activeShift: this.props.currentViewProperties.shiftSelect,
    }//state
  }//constructor

  //change the shift that is used for event modification
  handleShiftChange(selected){
    if(this.state.activeShift === selected){
      //basically de-select the shift
      this.setState({ activeShift: "" })
      this.props.changeSelectedShft("")
    } else {
      this.props.changeSelectedShft(selected)
      this.setState({ activeShift: selected })
    }//if-else
  }//handle shift change

  render(){
    const { viewHeight, shifts } = this.props
    const { activeShift } = this.state

    return (
      <div className={viewHeight}>
        <ul role="listbox">
          {
            shifts.map(shift => (
              shift.shiftName === 'OR' ? (
                  <li key={shift.id}>
                    <select type="button" className={activeShift === "OR-4" || activeShift === "OR-6" || activeShift === "OR-8" ? 'shiftBtn active' : 'shiftBtn'}>{shift.shiftName}
                      <option value='or4' onClick={() => this.handleShiftChange("OR-4")}>OR-4</option>
                      <option value='or6' onClick={() => this.handleShiftChange("OR-6")}>OR-6</option>
                      <option value='or8' onClick={() => this.handleShiftChange("OR-8")}>OR-8</option>
                    </select>
                  </li>
                )//return
              : (
                shift.shiftName === 'Admin' ? (
                  <li key={shift.id}>
                    <select type="button" className={activeShift.substring(0,5) === "Admin" ? 'shiftBtn active' : 'shiftBtn'}>{shift.shiftName}
                      <option onClick={() => this.handleShiftChange("Admin-1")} value='Admin1'>Admin-1</option>
                      <option onClick={() => this.handleShiftChange("Admin-2")} value='Admin2'>Admin-2</option>
                      <option onClick={() => this.handleShiftChange("Admin-3")} value='Admin3'>Admin-3</option>
                      <option onClick={() => this.handleShiftChange("Admin-4")} value='Admin4'>Admin-4</option>
                      <option onClick={() => this.handleShiftChange("Admin-5")} value='Admin5'>Admin-5</option>
                      <option onClick={() => this.handleShiftChange("Admin-6")} value='Admin6'>Admin-6</option>
                      <option onClick={() => this.handleShiftChange("Admin-7")} value='Admin7'>Admin-7</option>
                      <option onClick={() => this.handleShiftChange("Admin-8")} value='Admin8'>Admin-8</option>
                      <option onClick={() => this.handleShiftChange("Admin-9")} value='Admin9'>Admin-9</option>
                      <option onClick={() => this.handleShiftChange("Admin-10")} value='Admin10'>Admin-10</option>
                      <option onClick={() => this.handleShiftChange("Admin-11")} value='Admin11'>Admin-11</option>
                      <option onClick={() => this.handleShiftChange("Admin-12")} value='Admin12'>Admin-12</option>
                      <option onClick={() => this.handleShiftChange("Admin-13")} value='Admin13'>Admin-13</option>
                      <option onClick={() => this.handleShiftChange("Admin-14")} value='Admin14'>Admin-14</option>
                      <option onClick={() => this.handleShiftChange("Admin-15")} value='Admin15'>Admin-15</option>
                      <option onClick={() => this.handleShiftChange("Admin-16")} value='Admin16'>Admin-16</option>
                      <option onClick={() => this.handleShiftChange("Admin-17")} value='Admin17'>Admin-17</option>
                      <option onClick={() => this.handleShiftChange("Admin-18")} value='Admin18'>Admin-18</option>
                      <option onClick={() => this.handleShiftChange("Admin-19")} value='Admin19'>Admin-19</option>
                      <option onClick={() => this.handleShiftChange("Admin-20")} value='Admin20'>Admin-20</option>
                      <option onClick={() => this.handleShiftChange("Admin-21")} value='Admin20'>Admin-21</option>
                    </select>
                  </li>
                ) : (<li key={shift.id}><button type="button" className={activeShift === shift.shiftName ? 'shiftBtn active' : 'shiftBtn'} onClick={() => this.handleShiftChange(shift.shiftName)}>{shift.shiftName}</button></li>)
                )
              )//function
            )//shifts.map
          }
        </ul>
      </div>
    )//return
  }//render
}//Component

//now to specify the areas of state to connect to
const mapStateToProps = state => ({
  currentViewProperties: state.currentViewProperties,
  shifts: state.shifts, 
 })//mapStateToProps
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(ShiftSelect)