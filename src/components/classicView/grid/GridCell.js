import React, { Component } from 'react'
import { getDayName, getMonth } from '../../../helpfulFiles/dateStuff'

class GridCell extends Component {
  handleClickEvent(){
    let selectedYear = this.props.currentViewProperties.yearSelect
    let selectedMonth = this.props.currentViewProperties.monthSelect

    if(this.props.currentViewProperties.shiftSelect === ''){
      //either delete or do nothing
      if(this.props.theEvent[0]){
        this.props.removeEvent(this.props.theEvent[0].id)
      }//inner if
     } else if(this.props.theEvent.length > 0){
       //create object with details for update
       let updateEventDetails = {
        'id': this.props.theEvent[0].id,
        'shiftName': this.props.currentViewProperties.shiftSelect,
      }//updateEventDetails

      //send the details to the reducer
      this.props.updateEvent(updateEventDetails)
     } else {
      //create the new object that will be sent to reducer
      let newEventDetails = {
          'personId': this.props.personDetails.id,
          'shiftName': this.props.currentViewProperties.shiftSelect,
          'day': this.props.day,
          'selectedYear': this.props.currentViewProperties.yearSelect,
          'selectedMonthName': getMonth(this.props.currentViewProperties.monthSelect),
          'shiftTime': this.props.shiftTime,
          'dayType': this.props.dayType,
          'dayName': getDayName(selectedYear,selectedMonth,this.props.day)
        }//newEventDetails
        
        //send the details to the reducer
        this.props.addEvent(newEventDetails)
      }//else
    }//end of handleClickEvent

  render() {
    return (
      <div className={this.props.shiftTime} onClick={() => this.handleClickEvent()}>
        {this.props.theEvent[0] ? this.props.theEvent[0].shiftName : ''}
      </div>
    )//return
  }//render
}//shiftSettings

export default GridCell