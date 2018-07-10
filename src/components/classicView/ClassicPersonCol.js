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
  
  handleClickEvent(item, idx){
    console.log('add event clicked for ' + this.props.personDetails.name + ' details: ' + (item.length === 0 ? 'nothing' : item[0].id) + ' and ' + idx)

    //if empty, add the event. else, show a modal with more options
    if(item.length > 0){ 
      //do stuff
      console.log(' popping up... ')
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

        //update the local component
        // monthEventList[idx] = this.props.currentViewProperties.shiftSelect

        // this.setState({ monthEventList })
      }//else
    }//end of handleClickEvent
    
  render(){
    //in the render function we create the event list that is rendered out


    //FIRST setup variables and some date stuff
    const { currentViewProperties, eventList, personID, monthDates, weekendList } = this.props
    
    //make a blank list that will render if no events
    // for(let i=0;i<monthDates.length;i++){
      // monthEventList[i] = ' '
    // }////for
    // console.log('monthEventList  ' + monthEventList)
    
    //SECOND grab and format the data for this particular person
    //grab info from props (eventsReducer) and filter out events for each person
    // let theirEvents = []
    // for(let i=1;i<monthDates.length+1;i++){
    //   let tmpList = eventList[i]['events'].filter(item => item.personId === personID)
    //   theirEvents.push(tmpList)
    // }//// for
    // console.log('theirEvents  ' + JSON.stringify(theirEvents[5]))
    
    // //THIRD  make the list that will be rendered, and set it to local state
    // //add theirEvents to the list that, once rendered, will be the vertical column of items
    // let monthEventList = []
    const theBlank = ''
    // for(let j=0; j<theirEvents.length; j++){
    //   if(theirEvents[j].length > 1){
    //     // monthEventList[j] = [theirEvents[j][0].shiftName]   //add something for multiple shifts per day
    //     monthEventList[j] = [<div key={0}>{theirEvents[j][0].shiftName}</div>, <div key={1}>{theirEvents[j][1].shiftName}</div>]   //add something for multiple shifts per day
    //   }////if
    //   else if(theirEvents[j].length > 0){
    //     monthEventList[j] = theirEvents[j][0].shiftName   //add something for multiple shifts per day
    //   }//// else if
    // }//// for
    // // console.log(monthEventList)
    // // this.setState({ monthEventList })
    // // console.log('weekend List:  ' + weekendList)
    
    // let dayList = sssssss > 1 ? yyyy : zzzzzz
    //set local state with filtered list
    //make the render function read ffrom state
    //onClick of a grid cell, if there is a change, update local state, then call action this.props.addEvent
    return (
      <div className="classicGridPersonCol" role="column">
          <div className="classicGridPersonName" role="columnheader">{this.props.personDetails.name}</div>
          {this.props.eventList.map((item, idx) => <div key={idx} className={this.props.weekendList.includes(idx+1) ? "classicGridCell weekend" : "classicGridCell"} role="cell" onClick={() => this.handleClickEvent(item, idx)}>{ item.length > 0 ? (item.length > 1 ? [ <div key={0}>{item[0].shiftName}</div>, <div key={1}>{item[1].shiftName}</div> ] : item[0].shiftName)  : theBlank }</div>)}
      </div>
    )
  }
}// end ClassicPersonCol component