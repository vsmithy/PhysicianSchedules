/*******************************************************
 * The GRID Component shows a calendar-esque grid of days and
 * people, and the shift they are workin on that day. There are
 * two slots per day, corresponding to an AM and a PM shift assignment.
 * The client wanted this view to be as information dense as possible, and
 * was explicit in their decision to sacrifice ux for being able to scroll and
 * see more stuff.
*******************************************************/

import React, {Component}  from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//local files and components
import * as actionCreators from '../../../actions'
import ClassicPersonCol from './ClassicPersonCol'
import ShiftSettings from '../settingsMenus/ShiftSettings'
import PeopleSettings from '../settingsMenus/PeopleSettings'
import MeetingSettings from '../settingsMenus/MeetingSettings'
import { meetingData } from '../../../data/meetingData'
import { getMonth, getWeekends, getMonthDates, getDayName } from '../../../helpfulFiles/dateStuff'


class Grid extends Component {
  constructor(props){
    super(props)

    this.handleHideModal = this.handleHideModal.bind(this)
  }//constructor

  componentDidMount(){
    //populate with meeting data
    for(let i=0;i<meetingData.length;i++){
      //create the new object for each meeting
      let newEventDetails = {
        'personId': meetingData[i].personId,
        'shiftName': meetingData[i].shiftName,
        'day': meetingData[i].day,
        'selectedYear': meetingData[i].year,
        'selectedMonthName': meetingData[i].month,
        'shiftTime': meetingData[i].shiftTime,
        'dayType': meetingData[i].dayType,
        'dayName': meetingData[i].dayName
      }//newEventDetails
      
      //send the details to the reducer
      this.props.addEvent(newEventDetails)
    }//for
  }//componentDidMount

  handleHideModal(){
    const { currentViewProperties } = this.props
    if(currentViewProperties.shiftSettingsWindow === "show" || currentViewProperties.peopleSettingsWindow === "show" || currentViewProperties.meetingSettingsWindow === "show" ){
      //do nothing
    } else { this.props.toggleModal() }
  }//handleHideModal

  render(){
    const { currentViewProperties, people, shifts } = this.props
    const person = people.filter(item => item.isActive === true)

    //generate some date related info for the selected year and month
    let selectedYear = currentViewProperties.yearSelect
    let selectedMonth = currentViewProperties.monthSelect
    let monthDates = getMonthDates(selectedMonth, selectedYear) //for the days in a month (through 2021)
    let weekendList = getWeekends(monthDates.length+1, selectedMonth, selectedYear) //get a list of weekend days for the selected month

    //toggle the classNames for the various modal screens
    let modalView = currentViewProperties.modal === "show" ? "modal" : "modal hidden"
    let shiftSettingsView = currentViewProperties.shiftSettingsWindow === "show" ? "shiftSettings" : "shiftSettings hidden"
    let peopleSettingsView = currentViewProperties.peopleSettingsWindow === "show" ? "peopleSettings" : "peopleSettings hidden"
    let meetingSettingsView = currentViewProperties.meetingSettingsWindow === "show" ? "meetingSettings" : "meetingSettings hidden"

    return (
      <section className="classicGridSection" role="application">
        <div className="classicGrid" role="grid">
          <div className="classicGridDateCol" role="column">
            <div className="classicGridMonthName" role="columnheader">{getMonth(selectedMonth)}</div>
            {
              monthDates.map(day => <div className={weekendList.includes(day) ? "classicGridDate weekend" : "classicGridDate"}  role="rowheader" key={day}><div className={weekendList.includes(day) ? "classicGridDayNum weekend" : "classicGridDayNum"}>{day}</div><div className={weekendList.includes(day) ? "classicGridDayName weekend" : "classicGridDayName"}>{getDayName(selectedYear,selectedMonth,day)}</div></div>)
            }
            <div className="classicGridMonthName" role="columnheader">{getMonth(selectedMonth)}</div>
          </div>
          {person.map(item => <ClassicPersonCol 
            key={item.id} 
            personDetails={item}
            monthDates={monthDates} 
            weekendList={weekendList}
            currentViewProperties={currentViewProperties}
            shifts={shifts}
            />)}
          <div className="classicGridDateCol" role="column">
            <div className="classicGridMonthName" role="columnheader">{getMonth(selectedMonth)}</div>
            {
              monthDates.map(day => <div className={weekendList.includes(day) ? "classicGridDate weekend" : "classicGridDate"}  role="rowheader" key={day}><div className={weekendList.includes(day) ? "classicGridDayNum weekend" : "classicGridDayNum"}>{day}</div><div className={weekendList.includes(day) ? "classicGridDayName weekend" : "classicGridDayName"}>{getDayName(selectedYear,selectedMonth,day)}</div></div>)
            }
            <div className="classicGridMonthName" role="columnheader">{getMonth(selectedMonth)}</div>
          </div>
        </div>
        <div className={modalView} onClick={this.handleHideModal}></div>
        <ShiftSettings 
          viewChoice={shiftSettingsView} 
          shifts={shifts} 
          addShift={this.props.addShift} 
          removeShift={this.props.removeShift}
          toggleModal={this.props.toggleModal}
          toggleShiftSettingsWindow={this.props.toggleShiftSettingsWindow}
        />
        <PeopleSettings 
          toggleModal={this.props.toggleModal}
          togglePeopleSettingsWindow={this.props.togglePeopleSettingsWindow}
          viewChoice={peopleSettingsView}
          people={this.props.people}
          activatePerson={this.props.activatePerson}
          deactivatePerson={this.props.deactivatePerson}
          addPerson={this.props.addPerson}
          changeRole={this.props.changeRole}
        />
        <MeetingSettings 
          toggleModal={this.props.toggleModal}
          toggleMeetingSettingsWindow={this.props.toggleMeetingSettingsWindow}
          viewChoice={meetingSettingsView}
          meetings={this.props.meetings}
        />
      </section>
    )//return
  }//render
}//grid

//now to specify the areas of state to connect to
const mapStateToProps = state => ({
  currentViewProperties: state.currentViewProperties,
  people: state.people, 
  meetings: state.meetings,
  shifts: state.shifts,
 })
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(Grid)