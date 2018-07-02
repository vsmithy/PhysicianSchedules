import React, { Component } from 'react'
import { events } from '../../data/sampleData'

export default class ClassicPersonCol extends Component{
  constructor(props){
    super(props)

    this.state = {
      'monthSelect': this.props.currentViewProperties.monthSelect,
    }
  }

  handleNewEvent(item, idx){
    // console.log('add event clicked for ' + this.props.personDetails.name + ' details: ' + item + ' and ' + idx)

    //make utc date
    const { currentViewProperties } = this.props
    let yearSelect = currentViewProperties.yearSelect
    let monthSelect = currentViewProperties.monthSelect

    let dateSelected = Date.UTC(yearSelect, monthSelect, idx+1)
    // console.log('current shift ' + this.props.currentViewProperties.shiftSelect)

    let newEventDetails = {
      'date': dateSelected,
      'personId': this.props.personDetails.id,
      'shiftName': this.props.currentViewProperties.shiftSelect,
    }

    this.props.addEvent(newEventDetails)
    this.setState({'monthSelect': monthSelect})
  }

  render(){
    const { currentViewProperties } = this.props
    let yearSelect = currentViewProperties.yearSelect
    let monthSelect = currentViewProperties.monthSelect

    let chosenDate = Date.UTC(yearSelect, monthSelect, 1)
    let nextMonth = Date.UTC(yearSelect, monthSelect + 1, 1)

    let theirEvents = events.filter(item => item.personId === this.props.personID && item.date >= chosenDate && item.date < nextMonth)

    theirEvents.map(evnt => console.log(this.props.personDetails.name + " all events:  " + (new Date(evnt.date)).getUTCDate()))
    // console.log(this.props.personDetails.name + " all events:  " + theirEvents)
    //add events to array that considers monthdates
    let monthEventList = []
    for(let i=0;i<this.props.monthDates.length;i++){
      monthEventList[i] = ' '
    }//fills list with blanks
  
    // check all items in theirevents to see if any match
    let dayNum
    for(let j=0; j<theirEvents.length; j++){
      let d = new Date(theirEvents[j].date)
      dayNum = d.getUTCDate()

      monthEventList[dayNum] = theirEvents[j].shiftName
    }//add this person's events to the monthEventList array



    // console.log(this.props.personDetails.name + " event list:  " + monthEventList)
    // console.log('theirEvents ' + theirEvents)
    return (
      <div className="classicGridPersonCol" role="column">
            <div className="classicGridPersonName" role="columnheader">{this.props.personDetails.name}</div>
            {monthEventList.map((item, idx) => <div key={idx} className="classicGridCell" role="cell" onClick={() => this.handleNewEvent(item, idx)}>{item}</div>)}
        </div>
    )
  }
}

// if getUTCDay() is 0 or 6