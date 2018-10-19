/*
   - This component renders out a column of event data for each person designated as active
   - First we show the person's name, and then we map over each item in an array of events
*/

import React from 'react'
import GridCell from './GridCell'
import { CurrSettingsContext } from '../../../containers/ClassicContainer'
import { getMonth } from '../../../helpfulFiles/dateStuff'

const ClassicPersonCol = (props) => (
  <div className="classicGridPersonCol" role="column">
    <div className="classicGridPersonName" role="columnheader">{props.personDetails.name}</div>
    {
      props.monthDates.map((item, idx) => <div key={idx} className={props.weekendList.includes(idx+1) ? "classicGridCell weekend" : "classicGridCell"} role="cell" >
          <GridCell 
            shiftTime="AM" 
            theEvent={props.eventList.filter(evtListItem => evtListItem.day === item && evtListItem.shiftTime === "AM")} 
            dayType={props.weekendList.includes(idx+1) ? "weekend" : "standard"}
            personDetails={props.personDetails}
            day={idx+1}
            removeEvent={props.removeEvent}
            addEvent={props.addEvent}
            updateEvent={props.updateEvent}
            />
          <GridCell 
            shiftTime="PM" 
            theEvent={props.eventList.filter(evtListItem => evtListItem.day === item && evtListItem.shiftTime === "PM")} 
            dayType={props.weekendList.includes(idx+1) ? "weekend" : "standard"}
            personDetails={props.personDetails}
            day={idx+1}
            removeEvent={props.removeEvent}
            addEvent={props.addEvent}
            updateEvent={props.updateEvent}
            />
        </div>
      )
    }
    <div className="classicGridPersonName" role="columnheader">{props.personDetails.name}</div>
  </div>
)//ClassicPersonCol component

//passing the context in as a prop
const ClassicPersonColCtx = props => (
  <CurrSettingsContext.Consumer>
    {context => <ClassicPersonCol {...props} context={context} eventList={props.eventsReducer.filter(evt => evt.year === context.yearSelect && evt.month === getMonth(context.monthSelect) && props.personDetails.id === evt.personId)} />}
  </CurrSettingsContext.Consumer>
)

export default ClassicPersonColCtx