import React, { Component } from 'react'
import { getDayName, getMonth } from '../../../helpfulFiles/dateStuff'
import { CurrSettingsContext } from '../../../containers/ClassicContainer'

function handleClickEvent(props, context){
  console.log('i have been clicked')
  // console.log(context)
  let selectedYear = context.yearSelect
  let selectedMonth = context.monthSelect

  if(context.shiftSelect === ''){
    //either delete or do nothing
    console.log('no shift is selected')
    if(props.theEvent[0]){
      props.removeEvent(props.theEvent[0].id)
    }//inner if
    } else if(props.theEvent.length > 0){
      console.log('updating current event with new event')
      //create object with details for update
      let updateEventDetails = {
      'id': props.theEvent[0].id,
      'shiftName': context.shiftSelect,
    }//updateEventDetails

    //send the details to the reducer
    props.updateEvent(updateEventDetails)
    } else {
      console.log('adding a completely new item')
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
      console.log('the newEventDetails will be')
      console.log(newEventDetails)
      props.addEvent(newEventDetails)
    }//else
}//end of handleClickEvent

class GridCell extends Component {
  // componentDidMount(){ console.log('GridCell did mount') }
  componentDidUpdate(){ console.log('GridcellDidUpdate') }
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

export default GridCell