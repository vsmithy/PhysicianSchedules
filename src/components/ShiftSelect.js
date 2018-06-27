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
    const defaultStyle = {
      transition: 'height 125ms ease-in-out',
      height: viewHeight, 
      padding: 0.126 + 'rem'
    }

    const viewActive = (isSelected) => this.state.activeShift === isSelected ? 'shiftBtnActive' : 'shiftBtn'

    return (
      <div role="presentation" class="shiftComponent">
        <ul role="listbox">
          {
            shifts.map(shift => <li key={shift.id}><button type="button" className="shiftBtn" onClick={() => this.handleShiftChange(shift.shiftName)}>{shift.shiftName}</button></li>)
          }
        </ul>
      </div>
    )//return
  }//render
}//Component



      // <section  style={defaultStyle}>
      //   {
      //     shifts.map(
      //       shift => <button key={shift.id} className={viewHeight === 0 ? 'shiftBtnNone' : viewActive(shift.shiftName)} onClick={() => this.handleShiftChange(shift.shiftName)}>{shift.shiftName}</button>
      //     )
      //   }
      // </section>