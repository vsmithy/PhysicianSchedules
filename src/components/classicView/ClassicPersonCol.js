import React, { Component } from 'react'
import { events } from '../../data/sampleData'

export default class ClassicPersonCol extends Component{
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
            {monthEventList.map((item, idx) => <div key={idx} className="classicGridCell" role="cell">{item}</div>)}
        </div>
    )
  }
}