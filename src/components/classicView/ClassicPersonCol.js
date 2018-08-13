/*
   - This component renders out a column of event data for each person designated as active
   - First we show the person's name, and then we map over each item in an array of events
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//local files and components
import * as actionCreators from '../../actions'
import ModalContent from './ModalContent'
import { getMonth, getDayName } from '../../helpfulFiles/dateStuff'

class ClassicPersonCol extends Component{
  constructor(props){
    super(props)
    this.handleClickEvent = this.handleClickEvent.bind(this)
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
  
  handleClickEvent(item, idx, shiftTime){
    let selectedYear = this.props.currentViewProperties.yearSelect
    let selectedMonth = this.props.currentViewProperties.monthSelect

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
          'selectedYear': this.props.currentViewProperties.yearSelect,
          'selectedMonthName': getMonth(this.props.currentViewProperties.monthSelect),
          'shiftTime': shiftTime,
          'dayType': dayType,
          'dayName': getDayName(selectedYear,selectedMonth,item)
        }//newEventDetails
        
        //send the details to the reducer
        this.props.addEvent(newEventDetails)
      }//else
    }//end of handleClickEvent
    
  render(){
    //generate some date related info for the selected year and month
    let selectedYear = this.props.currentViewProperties.yearSelect
    let selectedMonth = this.props.currentViewProperties.monthSelect
    let selectedMonthName = getMonth(selectedMonth)
    const theBlank = ''
    let eventList = this.props.eventsReducer.filter(evt => evt.year === selectedYear && evt.month === selectedMonthName && this.props.personDetails.id === evt.personId)

    return (
      <div className="classicGridPersonCol" role="column">
        <div className="classicGridPersonName" role="columnheader">{this.props.personDetails.name}</div>
        {
          this.props.monthDates.map((item, idx) => <div key={idx} className={this.props.weekendList.includes(idx+1) ? "classicGridCell weekend" : "classicGridCell"} role="cell" >
              {
                <div role="presentation">
                  <div className="AM" onClick={() => this.handleClickEvent(item, idx, "AM")}>
                    {
                      eventList.filter(evtListItem => evtListItem.day === item && evtListItem.shiftTime === "AM").length > 0 ? eventList.filter(evtListItem => evtListItem.day === item && evtListItem.shiftTime === "AM")[0].shiftName : theBlank
                    }
                  </div>
                  <div className="PM" onClick={() => this.handleClickEvent(item, idx, "PM")}>
                    {
                      eventList.filter(evtListItem => evtListItem.day === item && evtListItem.shiftTime === "PM").length > 0 ? eventList.filter(evtListItem => evtListItem.day === item && evtListItem.shiftTime === "PM")[0].shiftName : theBlank
                    }
                  </div>
                </div>
              }
              <ModalContent 
                shifts={item} 
                theDay={idx} 
                listOfShifts={this.props.shifts} 
                currentViewProperties={this.props.currentViewProperties} 
                updateEvent={this.props.updateEvent}  
                addEvent={this.props.addEvent}
                removeEvent={this.props.removeEvent}
                updateMaxId={this.props.updateMaxId}
                personId={this.props.personDetails.id} 
                modalId={this.props.personDetails.name + idx}
              />
            </div>
          )
        }
      </div>
    )
  }//render
}//ClassicPersonCol component

//connect to state for events
const mapStateToProps = state => ({
  eventsReducer: state.eventsReducer,
 })

//connect to the action creators
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(ClassicPersonCol)