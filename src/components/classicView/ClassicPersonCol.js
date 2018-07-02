import React, { Component } from 'react'
import { events } from '../../data/sampleData'

export default class ClassicPersonCol extends Component{
  render(){
    let theirEvents = events.filter(item => item.personId === this.props.personID)

    //add events to array that considers monthdates
    let monthEventList = []
    for(let i=0;i<this.props.monthDates.length;i++){
      // check all items in theirevents to see if any match
      let dayNum
      for(let j=0; j<theirEvents.length; j++){
        let d = new Date(theirEvents[j].date)
        dayNum = d.getDate()

        if(dayNum === i+1){
          monthEventList[i] = theirEvents[j].shiftName
        } else {
          monthEventList[i] = ' '
        }
      }
    }

    // console.log('theirEvents ' + theirEvents)
    return (
      <div class="classicGridPersonCol" role="column">
            <div class="classicGridPersonName" role="columnheader">{this.props.personDetails.name}</div>
            {monthEventList.map(item => <div key={item.indexOf} class="classicGridCell" role="cell">{item}</div>)}
        </div>
    )
  }
}

    {/* <div class="classicGridPersonCol" role="column">
            <div class="classicGridPersonName" role="columnheader">{this.props.personDetails.name}</div>

            //now to map over their evvents
            {theirEvents.map(event => <div class="classicGridCell" role="cell">{event.shiftName}</div>)}
            
        </div> */}