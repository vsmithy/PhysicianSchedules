import React, {Component}  from 'react'

export default class ShiftSelect extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeShift: this.props.currentViewProperties.shiftSelect,
    }
  }//constructor

  //change the shift that is used for event modification
  handleShiftChange(selected){
    this.props.changeSelectedShft(selected)
    this.setState({ activeShift: selected })
  }//handle shift change

  render(){
    const { viewHeight, shifts, currentViewProperties, changeSelectedShft } = this.props

    return (
      <div role="presentation" className={viewHeight}>
        <ul role="listbox">
          {
            shifts.map(shift => <li key={shift.id}><button type="button" className={this.state.activeShift === shift.shiftName ? 'shiftBtn active' : 'shiftBtn'} onClick={() => this.handleShiftChange(shift.shiftName)}>{shift.shiftName}</button></li>)
          }
        </ul>
      </div>
    )//return
  }//render
}//Component
