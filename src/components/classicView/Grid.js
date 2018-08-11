import React, {Component}  from 'react'
import { getMonth } from '../../helpfulFiles/dateStuff'
// import { person } from '../../data/sampleData'

import ClassicPersonCol from './ClassicPersonCol'
import ShiftSettings from './ShiftSettings'
import PeopleSettings from './PeopleSettings'
import MeetingSettings from './MeetingSettings'
import { calendarData } from '../../data/calendarData'

export default class Grid extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeMonthSelection: this.props.currentViewProperties.monthSelect,
    }//state
  }//constructor


  /*********************************************************/
  //lifecycleMethods
  //mounting
  //static getDerivedStateFromProps(nextProps, prevState)
  componentDidMount(){console.log('grid component did mount')}

  //updating
  //static getDerivedStateFromProps(nextProps, prevState)
  //shouldComponentUpdate(nextProps, nextState)
  //getSnapshotBeforeUpdate(prevProps, prevState)
  componentDidUpdate(prevProps, prevState, snapshot){console.log('grid component did update')}

  //unmounting
  componentWillUnmount(){console.log('grid component will unmount')}

  //errorHandling
  componentDidCatch(error, info){'grid component caught an error'}
  /*******************************************************************/

  render(){
    let selectedMonth = this.props.currentViewProperties.monthSelect
    let selectedMonthName = getMonth(selectedMonth)
    let selectedYear = this.props.currentViewProperties.yearSelect
    const person = this.props.people.filter(item => item.isActive === true)

    //for the days in a month (through 2021)
    let monthDates = []
    if([0, 2, 4, 6, 7, 9, 11].includes(selectedMonth)){
      for(let i=0;i<31;i++){
        monthDates.push(i+1)
      }
    }
    else if([3,5,8,10].includes(selectedMonth)){
      for(let i=0;i<30;i++){
        monthDates.push(i+1)
      }
    }
    else if(selectedMonth === 1 &&  selectedYear === 2020){
      for(let i=0;i<29;i++){
        monthDates.push(i+1)
      }
    }
    else{
      for(let i=0;i<28;i++){
        monthDates.push(i+1)
      }
    }


    //grab info from props (events reducer) and filter out WEEKENDS for each person
    let weekendList = []
    for(let i=1;i<monthDates.length+1;i++){

      //make a date
      let milliUTC = Date.UTC(selectedYear,selectedMonth,i)
      // console.log(milliUTC)
      let d = new Date(milliUTC)

      // console.log(d)
      //calc which day of week
      let dayOfWeek = d.getUTCDay()

      //if day of week is 0 or 6, make dayType = 'weekend'
      if(dayOfWeek === 0 || dayOfWeek === 6){
        weekendList.push(i)
      }//if
    }//for

    const getDayName = function(dayNbr) {
      //make a date
      let milliUTC = Date.UTC(selectedYear,selectedMonth,dayNbr)
      // console.log(milliUTC)
      let d = new Date(milliUTC)

      // console.log(d)
      //calc which day of week
      let dayOfWeek = d.getUTCDay()

      //day Name of week
      let daysNames = {
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday"
      }//daysNames

      return daysNames[dayOfWeek]
    }//getDayName

    //the goal is to send classicpersoncol a list of either blanks or data
    //you can filter the event lis tfo r eavh person id
    //for person.map, i want to make a prop that is monthEventList
    //how many people are active?
    //for the numActivePeople.length
    let modalView = this.props.currentViewProperties.modal === "show" ? "modal" : "modal hidden"
    let shiftSettingsView = this.props.currentViewProperties.shiftSettingsWindow === "show" ? "shiftSettings" : "shiftSettings hidden"
    let peopleSettingsView = this.props.currentViewProperties.peopleSettingsWindow === "show" ? "peopleSettings" : "peopleSettings hidden"
    let meetingSettingsView = this.props.currentViewProperties.meetingSettingsWindow === "show" ? "meetingSettings" : "meetingSettings hidden"
    // let modalContentView = this.props.currentViewProperties.modal === "show" ? "modal-content" : "modal-content hidden"

    return (
      <section className="classicGridSection" role="application">
        <div className="classicGrid" role="grid">
          <div className="classicGridDateCol" role="grid">
            <div className="classicGridMonthName" role="columnheader">{getMonth(selectedMonth)}</div>
            {
              monthDates.map(day => <div className={weekendList.includes(day) ? "classicGridDate weekend" : "classicGridDate"}  role="rowheader" key={day}>
                <div className={weekendList.includes(day) ? "classicGridDayNum weekend" : "classicGridDayNum"}>{day}</div>
                <div className={weekendList.includes(day) ? "classicGridDayName weekend" : "classicGridDayName"}>{getDayName(day)}</div>
                </div>)
            }
          </div>

          {person.map(item => <ClassicPersonCol 
            key={item.id} 
            monthDates={monthDates} 
            personID={item.id} 
            weekendList={weekendList}
            personDetails={item} 
            currentViewProperties={this.props.currentViewProperties}
            addEvent={this.props.addEvent}
            updateMaxId={this.props.updateMaxId} 
            removeEvent={this.props.removeEvent}
            eventList={ monthDates.map(theday => (calendarData.filter(evt => evt.personId === item.id && evt.day === theday && evt.year === selectedYear && evt.month === selectedMonthName).length > 0 ? sssaddstuffhere : '') ) }
            toggleModal={this.props.toggleModal}
            changeModalContentId={this.props.changeModalContentId}
            shifts={this.props.shifts}
            updateEvent={this.props.updateEvent}
            />)}

        </div>
        <div className={modalView} onClick={(this.props.currentViewProperties.shiftSettingsWindow === "show" || this.props.currentViewProperties.peopleSettingsWindow === "show" ) ? console.log('cant hide from the light') : () => this.props.toggleModal()}></div>
        <ShiftSettings 
          viewChoice={shiftSettingsView} 
          shifts={this.props.shifts} 
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
