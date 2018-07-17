/*
   - This component renders out a column of event data for each person designated as active
   - First we show the person's name, and then we map over each item in an array of events
   - Props Used:
      currentViewProperties
      eventList - this is what we filter for each person
      personDetails - the actual name, and ID of the person this column is for
      monthDates - {{ int }} the number of days in the selected month
      weekendList - an array containing the day number for saturday and sunday of the selected month
*/


import React, { Component } from 'react'
// import { getMonth } from '../../helpfulFiles/dateStuff'

export default class ModalContent extends Component{
  /*********************************************************/
  //lifecycleMethods
  //mounting
  //static getDerivedStateFromProps(nextProps, prevState)
  //componentDidMount(){ console.log('ModalContent component did mount') }//component did mount
      
  //updating
  //static getDerivedStateFromProps(nextProps, prevState)
  //shouldComponentUpdate(nextProps, nextState)
  //getSnapshotBeforeUpdate(prevProps, prevState)
  //componentDidUpdate(prevProps, prevState, snapshot){console.log('ModalContent component did update')}
  
  //unmounting
  //componentWillUnmount(){console.log('ModalContent component will unmount')}
  
  //errorHandling
  //componentDidCatch(error, info){'ModalContent component caught an error'}
  /*******************************************************************/
  
  renderChoice(){
    const { shifts, listOfShifts } = this.props

    if(shifts.length === 2){
      return (
        <div className={this.props.currentViewProperties.modal === "show" && this.props.currentViewProperties.modalId === this.props.modalId ? "modal-content" : "modal-content hidden"}>
          <div key={0} className="modalContentShift">
            <select className="modalContentShiftName">
              { listOfShifts.map(shiftItem => shifts[0].shiftName === shiftItem ? <option value={shiftItem} selected >shiftItem</option> : <option value={shiftItem}>shiftItem</option>   ) }
            </select>
            <button type="button"  className="shiftExitBtn" onClick={() => console.log('shift exit btn clicked')}><i className="fas fa-times"></i></button>
          </div>
          <div key={1} className="modalContentShift">
            <div className="modalContentShiftName">{shifts[1].shiftName}</div>
            <button type="button"  className="shiftExitBtn" onClick={() => console.log('shift exit btn clicked')}><i className="fas fa-times"></i></button>
          </div>
        </div>
      )
    } else if(shifts.length === 1){
      return (
        <div className={this.props.currentViewProperties.modal === "show" && this.props.currentViewProperties.modalId === this.props.modalId ? "modal-content" : "modal-content hidden"}>
          <div key={0} className="modalContentShift">
            <div className="modalContentShiftName">{shifts[0].shiftName}</div> 
            <button type="button"  className="shiftExitBtn" onClick={() => console.log('shift exit btn clicked')}><i className="fas fa-times"></i></button>
          </div>
          <div className="addBtn" role="button" onClick={() => console.log('shift ADD btn clicked')}>
            <div className="left"><i className="fas fa-plus"></i></div>
            <div className="right">add</div>
          </div>
        </div>
      )
    } else{
      return (
        <div className={this.props.currentViewProperties.modal === "show" && this.props.currentViewProperties.modalId === this.props.modalId ? "modal-content" : "modal-content hidden"}>
          <div className="addBtn" role="button" onClick={() => console.log('shift ADD btn clicked')}>
            <div className="left"><i className="fas fa-plus"></i></div>
            <div className="right">add</div>
          </div>
        </div>
      )
    }
  }//renderChoice

  render(){
    return this.renderChoice()
  }//render
}// end ModalContent component
// {shifts.length > 0 ? (shifts.length > 1 ? [ <div key={0}>{shifts[0].shiftName}</div>, <div key={1}>{shifts[1].shiftName}</div> ] : shifts[0].shiftName)  : theBlank}