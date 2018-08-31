/*
   - This component renders out a column of event data for each person designated as active
   - First we show the person's name, and then we map over each item in an array of events
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//local files and components
import * as actionCreators from '../../../actions'
import GridCell from './GridCell'
import { getMonth } from '../../../helpfulFiles/dateStuff'

class ClassicPersonCol extends Component{
  render(){
    //generate some date related info for the selected year and month
    let selectedYear = this.props.currentViewProperties.yearSelect
    let selectedMonth = this.props.currentViewProperties.monthSelect
    let selectedMonthName = getMonth(selectedMonth)

    //filter out the events for each specific person:
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
            </div>
          )
        }
      </div>
    )
  }//render
}//ClassicPersonCol component

//connect to state
const mapStateToProps = state => ({
  eventsReducer: state.eventsReducer,
 })
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(ClassicPersonCol)