import React, { Component } from 'react'
import { events } from '../../data/sampleData'

export default class ClassicPersonCol extends Component{
  render(){
    let theirEvents = events.filter(event => event.personId === this.props.personID)

    //add events to array that considers monthdates
    let monthEventList = []
    for(let i=0;i<monthDates.length;i++){
      if the getdate()  day matches i, then use event data. if not, use the blank space
      monthEventList[i] = ' ' or the event data
    }

    // console.log('theirEvents ' + theirEvents)
    return (
      <div class="classicGridPersonCol" role="column">
            <div class="classicGridPersonName" role="columnheader">{this.props.personDetails.name}</div>

            {theirEvents.map(event => <div key={someKey} class="classicGridCell" role="cell">{event.shiftName}</div>)}
            
        </div>
    )
  }
}

    {/* <div class="classicGridPersonCol" role="column">
            <div class="classicGridPersonName" role="columnheader">{this.props.personDetails.name}</div>

            //now to map over their evvents
            {theirEvents.map(event => <div class="classicGridCell" role="cell">{event.shiftName}</div>)}
            
        </div> */}