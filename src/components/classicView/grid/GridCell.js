import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getDayName, getMonth } from '../../../helpfulFiles/dateStuff'
import { CurrSettingsContext } from '../../../containers/ClassicContainer'

function handleClickEvent(props, context){
  let selectedYear = context.yearSelect
  let selectedMonth = context.monthSelect

  if(context.shiftSelect === ''){
    //either delete or do nothing
    //no shift is selected
    if(props.theEvent[0]){
      props.removeEvent(props.theEvent[0].id)
    }//inner if
    } else if(props.theEvent.length > 0){
      //updating current event with new event
      //create object with details for update
      let updateEventDetails = {
      'id': props.theEvent[0].id,
      'shiftName': context.shiftSelect,
    }//updateEventDetails

    //send the details to the reducer
    props.updateEvent(updateEventDetails)
    } else {
    //adding a completely new item
    //create the new object that will be sent to reducer
    let newEventDetails = {
        'personId': props.personDetails.id,
        'shiftName': context.shiftSelect,
        'day': props.day,
        'selectedYear': selectedYear,
        'selectedMonthName': getMonth(selectedMonth),
        'shiftTime': props.shiftTime,
        'dayType': props.dayType,
        'dayName': getDayName(selectedYear,selectedMonth,props.day)
      }//newEventDetails
      
      //send the details to the reducer
      props.addEvent(newEventDetails)
    }//else
}//end of handleClickEvent

class GridCell extends Component {
  render(){
    return (
      <CurrSettingsContext.Consumer>
        {context => (
          <div className={this.props.shiftTime} onClick={() => handleClickEvent(this.props, context)}>
            {this.props.theEvent[0] ? this.props.theEvent[0].shiftName : ''}
          </div>
        )}
      </CurrSettingsContext.Consumer>
    )//return
  }//render
}//shiftSettings

GridCell.propTypes = {
  shiftTime: PropTypes.string,
  theEvent: PropTypes.array,
  dayType: PropTypes.string,
  personDetails: PropTypes.object,
  day: PropTypes.number,
  removeEvent: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
}//propTypes

export default GridCell