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
import GridCell from './GridCell'
import { getMonth, getDayName } from '../../helpfulFiles/dateStuff'

class ClassicPersonCol extends Component{
  render(){
    //generate some date related info for the selected year and month
    let selectedYear = this.props.currentViewProperties.yearSelect
    let selectedMonth = this.props.currentViewProperties.monthSelect
    let selectedMonthName = getMonth(selectedMonth)
    let eventList = this.props.eventsReducer.filter(evt => evt.year === selectedYear && evt.month === selectedMonthName && this.props.personDetails.id === evt.personId)

    return (
      <div className="classicGridPersonCol" role="column">
        <div className="classicGridPersonName" role="columnheader">{this.props.personDetails.name}</div>
        {
          this.props.monthDates.map((item, idx) => <div key={idx} className={this.props.weekendList.includes(idx+1) ? "classicGridCell weekend" : "classicGridCell"} role="cell" >
              <GridCell 
                shiftTime="AM" 
                currentViewProperties={this.props.currentViewProperties} 
                theEvent={eventList.filter(evtListItem => evtListItem.day === item && evtListItem.shiftTime === "AM")} 
                dayType={this.props.weekendList.includes(idx+1) ? "weekend" : "standard"}
                personDetails={this.props.personDetails}
                day={idx+1}
                removeEvent={this.props.removeEvent}
                addEvent={this.props.addEvent}
                updateEvent={this.props.updateEvent}
                />
              <GridCell 
                shiftTime="PM" 
                currentViewProperties={this.props.currentViewProperties} 
                theEvent={eventList.filter(evtListItem => evtListItem.day === item && evtListItem.shiftTime === "PM")} 
                dayType={this.props.weekendList.includes(idx+1) ? "weekend" : "standard"}
                personDetails={this.props.personDetails}
                day={idx+1}
                removeEvent={this.props.removeEvent}
                addEvent={this.props.addEvent}
                updateEvent={this.props.updateEvent}
                />
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