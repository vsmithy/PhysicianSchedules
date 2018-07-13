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
  
  handleClickEvent(item, idx, event){
    console.log('add event clicked for ' + this.props.personDetails.name + ' details: ' + (item.length === 0 ? 'nothing' : item[0].id) + ' and ' + idx)
    console.log('top spacing is ' + event.clientY + ' left spacing is ' + event.clientX)
    console.log('top screen is ' + event.screenY + ' left screen is ' + event.screenX)

    //if empty, add the event. else, show a modal with more options
    if(item.length > 0){ 
      //do stuff
      console.log(' popping up... ')
      this.props.toggleModal()
      this.props.modalContentSpacing(event.clientX, event.clientY)
     } else {
      //create the object that will be sent to reducer
      let newEventDetails = {
          'personId': this.props.personDetails.id,
          'shiftName': this.props.currentViewProperties.shiftSelect,
          'day': idx+1,
          'eventId': (item.length === 0 ? 'none' : item[0].id),
          'selectedYear': this.props.currentViewProperties.yearSelect,
          'selectedMonthName': getMonth(this.props.currentViewProperties.monthSelect),
          'maxEventId': this.props.currentViewProperties.maxEventId
        }//newEventDetails
        
        //send the details to the reducer
        this.props.addEvent(newEventDetails)
        if(item.length === 0){ this.props.updateMaxId() }
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
          {this.props.eventList.map((item, idx) => <div key={idx} className={this.props.weekendList.includes(idx+1) ? "classicGridCell weekend" : "classicGridCell"} role="cell" onClick={(event) => this.handleClickEvent(item, idx, event)}>{ item.length > 0 ? (item.length > 1 ? [ <div key={0}>{item[0].shiftName}</div>, <div key={1}>{item[1].shiftName}</div> ] : item[0].shiftName)  : theBlank }</div>)}
      </div>
    )
  }//render
}// end ClassicPersonCol component