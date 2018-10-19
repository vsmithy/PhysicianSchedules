/*******************************************************
 * The GRID Component shows a calendar-esque grid of days and
 * people, and the shift they are workin on that day. There are
 * two slots per day, corresponding to an AM and a PM shift assignment.
 * The client wanted this view to be as information dense as possible, and
 * was explicit in their decision to sacrifice ux for being able to scroll and
 * see more stuff.
*******************************************************/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CurrSettingsContext } from '../../../containers/ClassicContainer'

//local files and components
import ClassicPersonColCtx from './ClassicPersonCol'
import ShiftSettings from '../settingsMenus/ShiftSettings'
import PeopleSettings from '../settingsMenus/PeopleSettings'
import { getMonth, getWeekends, getMonthDates, getDayName } from '../../../helpfulFiles/dateStuff'

class Grid extends Component {
  componentDidMount(){ console.log('Grid component mounted') }
  componentDidUpdate(){ console.log('Grid component updated') }
  render(){
    const { context, people, shifts } = this.props
    const person = people.filter(item => item.isActive === true) //get the people listed as active
    
    //generate some date related info for the selected year and month
    const monthDates = getMonthDates(context.monthSelect, context.yearSelect) //for the days in a month (through 2021)
    const weekendList = getWeekends(monthDates.length+1, context.monthSelect, context.yearSelect) //get a list of weekend days for the selected month
    const monthName = getMonth(context.monthSelect)
    
    return (
      <section className="classicGridSection" role="application">
        <div className="classicGrid" role="grid">
          <div className="classicGridDateCol" role="column">
            <div className="classicGridMonthName" role="columnheader">{monthName}</div>
            {
              monthDates.map(day => <div className={weekendList.includes(day) ? "classicGridDate weekend" : "classicGridDate"}  role="rowheader" key={day}><div className={weekendList.includes(day) ? "classicGridDayNum weekend" : "classicGridDayNum"}>{day}</div><div className={weekendList.includes(day) ? "classicGridDayName weekend" : "classicGridDayName"}>{getDayName(context.yearSelect,context.monthSelect,day)}</div></div>)
            }
            <div className="classicGridMonthName" role="columnheader">{monthName}</div>
          </div>
          {person.map(item => <ClassicPersonColCtx 
            key={item.id} 
            personDetails={item}
            monthDates={monthDates} 
            weekendList={weekendList}
            shifts={shifts}
            eventsReducer={this.props.eventsReducer}
            addEvent={this.props.addEvent}
            removeEvent={this.props.removeEvent}
            updateEvent={this.props.updateEvent}
            />)}
        </div>
        <div className={context.modal ? "modal" : "modal hidden"}></div>
        <ShiftSettings 
          viewChoice={context.shiftSettingsWindow ? "shiftSettings" : "shiftSettings hidden"} 
          shifts={shifts} 
          addShift={this.props.addShift} 
          removeShift={this.props.removeShift}
        />
        <PeopleSettings 
          viewChoice={context.peopleSettingsWindow ? "peopleSettings" : "peopleSettings hidden"}
          people={this.props.people}
          activatePerson={this.props.activatePerson}
          deactivatePerson={this.props.deactivatePerson}
          addPerson={this.props.addPerson}
          changeRole={this.props.changeRole}
        />
      </section>
    )//return
  }//render
}//Grid

//passing the context in as a prop
const GridCtx = props => (
  <CurrSettingsContext.Consumer>
    {context => <Grid {...props} context={context} />}
  </CurrSettingsContext.Consumer>
)

Grid.propTypes = {
  shifts: PropTypes.array,
  people: PropTypes.array,
  context: PropTypes.object,
  shifts: PropTypes.array,
  eventsReducer: PropTypes.array,
  activatePerson: PropTypes.func.isRequired,
  deactivatePerson: PropTypes.func.isRequired,
  addPerson: PropTypes.func.isRequired,
  changeRole: PropTypes.func.isRequired,
  addShift: PropTypes.func.isRequired,
  removeShift: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
  removeEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired
}//propTypes

export default GridCtx