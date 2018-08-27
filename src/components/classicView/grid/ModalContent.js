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
import { getMonth } from '../../../helpfulFiles/dateStuff'

export default class ModalContent extends Component{
  constructor(props){
    super(props)

    this.addAnotherEvent = this.addAnotherEvent.bind(this)
    this.removeEvent = this.removeEvent.bind(this)
  }
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
  updateValue(event, evt1){
    console.log(event.target.value)
    console.log('evt 1 ' + evt1)
    let theDay = this.props.theDay+1
    console.log('the day ' + theDay)
    //create the object that will be sent to reducer
    let newEventDetails = {
      'selectedYear': this.props.currentViewProperties.yearSelect,
      'selectedMonthName': getMonth(this.props.currentViewProperties.monthSelect),
      'day': theDay,
      'eventId': evt1,
      'shiftName': event.target.value,
    }//newEventDetails
    
    this.props.updateEvent(newEventDetails)

    // this.setState({
    //   selectValue: newValue
    //   //call props
    // })
  }

  addAnotherEvent(){
    console.log('i am in addAnotherEvent ')
      //create the object that will be sent to reducer
    let theDay = this.props.theDay+1
    let newEventDetails = {
      'selectedYear': this.props.currentViewProperties.yearSelect,
      'selectedMonthName': getMonth(this.props.currentViewProperties.monthSelect),
      'day': theDay,
      'maxEventId': this.props.currentViewProperties.maxEventId,
      'personId': this.props.personId,
      'shiftName': 'Admin',
      'eventId': 'none',
    }//newEventDetails
    
    //send the details to the reducer
    this.props.addEvent(newEventDetails)
    this.props.updateMaxId()
  }//addAnotherEvent
  
  removeEvent(evtId){
    console.log(' i am in removeEvent ')
    
    let theDay = this.props.theDay+1
    let newEventDetails = {
      'selectedYear': this.props.currentViewProperties.yearSelect,
      'selectedMonthName': getMonth(this.props.currentViewProperties.monthSelect),
      'day': theDay,
      'eventId': evtId,
    }//newEventDetails

    this.props.removeEvent(newEventDetails)

  }

  renderChoice(){
    const { shifts, listOfShifts } = this.props

    if(shifts.length === 1){
      const evt1 = shifts[0].id
      return (
        <div className={this.props.currentViewProperties.modal === "show" && this.props.currentViewProperties.modalId === this.props.modalId ? "modal-content" : "modal-content hidden"}>
          <div key={0} className="modalContentShift">
            <select className="modalContentShiftName" onChange={(event) => this.updateValue(event, evt1)}>
              { listOfShifts.map(shiftItem => shifts[0].shiftName === shiftItem.shiftName ? <option key={shiftItem.shiftName} value={shiftItem.shiftName} selected >{shiftItem.shiftName}</option> : <option key={shiftItem.shiftName} value={shiftItem.shiftName}>{shiftItem.shiftName}</option>   ) }
            </select>
            <button type="button"  className="shiftExitBtn" onClick={() => this.removeEvent(evt1)}><i className="fas fa-times"></i></button>
          </div>
        </div>
      )
    } else{
      return (
        <div className={this.props.currentViewProperties.modal === "show" && this.props.currentViewProperties.modalId === this.props.modalId ? "modal-content" : "modal-content hidden"}>
          <button className="addBtn" type="button" onClick={() => this.addAnotherEvent()}>
            <div className="left"><i className="fas fa-plus"></i></div>
            <div className="right">add</div>
          </button>
        </div>
      )
    }
  }//renderChoice

  render(){
    return this.renderChoice()
  }//render
}// end ModalContent component
// {shifts.length > 0 ? (shifts.length > 1 ? [ <div key={0}>{shifts[0].shiftName}</div>, <div key={1}>{shifts[1].shiftName}</div> ] : shifts[0].shiftName)  : theBlank}
