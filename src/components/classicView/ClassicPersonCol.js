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
import { getMonth } from '../../helpfulFiles/dateStuff'
import ModalContent from './ModalContent';

export default class ClassicPersonCol extends Component{
  constructor(props){
    super(props)
    
    this.handleClickEvent = this.handleClickEvent.bind(this)

    this.state = {
      monthEventList: [],
    }//state
  }//constructor

  /*********************************************************/
  //lifecycleMethods
  //mounting
  //static getDerivedStateFromProps(nextProps, prevState)
  //componentDidMount(){ console.log('classicPersonCol component did mount') }//component did mount
      
  //updating
  //static getDerivedStateFromProps(nextProps, prevState)
  //shouldComponentUpdate(nextProps, nextState)
  //getSnapshotBeforeUpdate(prevProps, prevState)
  //componentDidUpdate(prevProps, prevState, snapshot){console.log('classicPersonCol component did update')}
  
  //unmounting
  //componentWillUnmount(){console.log('classicPersonCol component will unmount')}
  
  //errorHandling
  //componentDidCatch(error, info){'classicPersonCol component caught an error'}
  /*******************************************************************/
  
  handleClickEvent(item, idx, event, shiftTime){
    console.log('add event clicked for ' + this.props.personDetails.name + ' details: ' + (item.length === 0 ? 'nothing' : item[0].id) + ' and ' + idx)
    // console.log('top spacing is ' + event.clientY + ' left spacing is ' + event.clientX)
    // console.log('target ' +  event.target.children[0].id)
    // let modalContentView = this.props.currentViewProperties.modal === "show" ? "modal-content" : "modal-content hidden"
    // let modalContent = event.target.children[0] ? event.target.children[0] : ''
    // modalContent.className = this.state.modalContentView
    //if empty, add the event. else, show a modal with more options
    const modalSelected = this.props.personDetails.name + idx
    if(item.length > 0){
      //do stuff
      // console.log(' popping up... ')
      if(this.props.currentViewProperties.modal !== "show"){
        this.props.toggleModal()
      }
      this.props.changeModalContentId(modalSelected)

     } else {
      //create the object that will be sent to reducer
      let dayType = this.props.weekendList.includes(idx+1) ? "weekend" : "standard"
      let newEventDetails = {
          'personId': this.props.personDetails.id,
          'shiftName': this.props.currentViewProperties.shiftSelect,
          'day': idx+1,
          'eventId': (item.length === 0 ? 'none' : item[0].id),
          'selectedYear': this.props.currentViewProperties.yearSelect,
          'selectedMonthName': getMonth(this.props.currentViewProperties.monthSelect),
          'maxEventId': this.props.currentViewProperties.maxEventId,
          'shiftTime': shiftTime,
          'dayType': dayType
        }//newEventDetails
        
        console.log('new details:')
        console.log(newEventDetails)

        //send the details to the reducer
        this.props.addEvent(newEventDetails)
        this.props.updateMaxId()
      }//else
    }//end of handleClickEvent
    
  render(){
    //in the render function we create the event list that is rendered out
    //FIRST setup variables and some date stuff
    const { currentViewProperties, eventList, personID, monthDates, weekendList } = this.props
    const theBlank = ''

    return (
      <div className="classicGridPersonCol" role="column">
          <div className="classicGridPersonName" role="columnheader">{this.props.personDetails.name}</div>
          {this.props.eventList.map((item, idx) => <div key={idx} className={this.props.weekendList.includes(idx+1) ? "classicGridCell weekend" : "classicGridCell"} role="cell" >{
            <div>
              <div className="AM" onClick={(event) => this.handleClickEvent(item, idx, event, "AM")}>
                {item.length > 0 ? (item.filter(evt => evt.shiftTime === "AM")[0] ? item.filter(evt => evt.shiftTime === "AM")[0].shiftName : theBlank) : theBlank}
              </div>
              <div className="PM" onClick={(event) => this.handleClickEvent(item, idx, event, "PM")}>
                {item.length > 0 ? (item.filter(evt => evt.shiftTime === "PM")[0] ? item.filter(evt => evt.shiftTime === "PM")[0].shiftName : theBlank) : theBlank}
              </div>
            </div>
            }<ModalContent 
            shifts={item} 
            theDay={idx} 
            listOfShifts={this.props.shifts} 
            currentViewProperties={this.props.currentViewProperties} 
            updateEvent={this.props.updateEvent}  
            addEvent={this.props.addEvent}
            removeEvent={this.props.removeEvent}
            updateMaxId={this.props.updateMaxId}
            personId={this.props.personDetails.id} 
            modalId={this.props.personDetails.name + idx} />
          </div>)}
      </div>
    )
  }//render
}// end ClassicPersonCol component
