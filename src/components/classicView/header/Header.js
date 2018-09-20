import React, {Component}  from 'react'
import XlsxPopulate from 'xlsx-populate'
import ClassicNavCal from './ClassicNavCal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//local files and components
import * as actionCreators from '../../../actions'
import { getMonth, getWeekends, getMonthDates, getDayName } from '../../../helpfulFiles/dateStuff'

class Header extends Component {
  /*********************************************************
          this is the export to excel zone bro
          the generateBlob function => calls the genenrate function => which calls  the getWorkbook function
  *********************************************************/
  getWorkbook(){
    return XlsxPopulate.fromBlankAsync()
  }//getWorkbook
  
  generate(type){
    let selectedYear = this.props.currentViewProperties.yearSelect
    let selectedMonth = this.props.currentViewProperties.monthSelect
    let selectedMonthName = getMonth(selectedMonth)
    const person = this.props.people.filter(item => item.isActive === true)
    const meetings = this.props.meetings
    let eventsReducer = this.props.eventsReducer

    let monthDates = getMonthDates(selectedMonth, selectedYear)
    let weekendList = getWeekends(monthDates.length+1, selectedMonth, selectedYear) //get a list of weekend days for the selected month

    //for the excel column letters
    const cols = ["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]

    return this.getWorkbook()
      .then(function (workbook) {
        //since we have AM and PM shift, we should make the list of items equal
        //twice the length of the selected month - one AM and PM shift per day
        let doubleMonthLength = []
        for(let i=0;i < 2*monthDates.length;i++){
          doubleMonthLength[i]=i+1
        }//for

        //make the first column: monthname and days of the month
        workbook.sheet(0).cell("A1").value(selectedMonthName)
        {
          doubleMonthLength.map(function(day, idx) { 
              if(weekendList.includes((Math.floor(idx/2)+1))){
                return day%2 === 0 ? workbook.sheet(0).cell("A"+(day+1)).value(getDayName(selectedYear,selectedMonth,(Math.floor(idx/2)+1))).style("fill","eff8ff") : workbook.sheet(0).cell("A"+(day+1)).value((Math.floor(idx/2)+1)).style("fill","eff8ff")
              } else {
                return day%2 === 0 ? workbook.sheet(0).cell("A"+(day+1)).value(getDayName(selectedYear,selectedMonth,(Math.floor(idx/2)+1))) : workbook.sheet(0).cell("A"+(day+1)).value((Math.floor(idx/2)+1))
              }// if-else
            }//function
          )//doublemonthlength.map
        }

        //next for the people listed as active on the schedule
        //make an array of arrays, each sub-array will belong to a different person
        let personShiftData = person.map(function(item){
            //grab the data for this person for the selected month and year
            let personEvents = eventsReducer.filter(evt => evt.year === selectedYear && evt.month === selectedMonthName && item.id === evt.personId)

            //now we put it all together, one array with doubleMonthLength entries in it
            //we alternate between AM and PM using the index%2
            //for each day, if an event exists print it, otherwise, print spaces
            let eventCellData = doubleMonthLength.map(function(mDate, idx){
              if(idx%2 === 0){
                //this is the AM shift
                return personEvents.filter(evt => evt.day === (Math.floor(idx/2)+1) && evt.shiftTime === 'AM').length > 0 ? personEvents.filter(evt => evt.day === (Math.floor(idx/2)+1) && evt.shiftTime === 'AM')[0].shiftName : ''
              } else {
                //this is the PM shift
                return personEvents.filter(evt => evt.day === (Math.floor(idx/2)+1) && evt.shiftTime === 'PM').length > 0 ? personEvents.filter(evt => evt.day === (Math.floor(idx/2)+1) && evt.shiftTime === 'PM')[0].shiftName : ''
              }//if
            })//doubleMonthLength.map

            return eventCellData
          })//personShiftData

        //after exporting, there are certain work shifts that should be styled in a specific way
        let cellStyles = {
          "OR-4":"d62613",
          "OR-6":"d62613",
          "OR-8":"d62613",
          "LDD":"ffdbfc",
          "LDN":"ffffba",
          "Inprocessing":"ffd99e",
          "CMD":"bcd8ff",
          "Ward":"9aedb7",
        }//cellStyles

        const styleCalc = function(idx, evtItem){
          if(cellStyles[evtItem]){
            return cellStyles[evtItem]
          } else if(weekendList.includes((Math.floor(idx/2)+1))){
            return "eff8ff"
          }//if-else
        }//styleCalc

        //column headers - map over the people, and print name in first cell of column
        {person.map( (item, idx) => workbook.sheet(0).cell(cols[idx] + "1").value(item.name) )}

        //next map down the events of each person
        {personShiftData.map( (evt, idx) => evt.map( (evtItem, i) => workbook.sheet(0).cell(cols[idx] + (i+2) ).value(evtItem).style("fill",styleCalc(i,evtItem) )))}

        //next, at the bottom of the spreadsheet, break the meetings up and then list them
        const firstFew = meetings.filter((mtg, i) => i<8)
        const secondFew = meetings.filter((mtg, i) => i>=8 && i<15)
        const lastFew = meetings.filter((mtg, i) => i>=15)
        {firstFew.map( (mtg, idx) => workbook.sheet(0).cell("A" + (idx+65)).value(mtg.id + " - " + mtg.data) )}
        {secondFew.map( (mtg, idx) => workbook.sheet(0).cell("H" + (idx+65)).value(mtg.id + " - " + mtg.data) )}
        {lastFew.map( (mtg, idx) => workbook.sheet(0).cell("P" + (idx+65)).value(mtg.id + " - " + mtg.data) )}

        return workbook.outputAsync({ type: type })
      })//then
  }//generate
  
  generateBlob(){
    return this.generate()
        .then(function (blob) {
          let url = window.URL.createObjectURL(blob)
          window.open(url)
          window.URL.revokeObjectURL(url)
        })
        .catch(function (err) {
            alert(err.message || err)
            throw err
        })//catch
  }//generateBlob

  /************************************************************/
  settingsToggle(toggleChoice){
    //change modalContentId: none0
    this.props.changeModalContentId('none0')

    //toggleModal
    this.props.toggleModal()

    //show chosen component
    if(toggleChoice === 'shifts'){
      this.props.toggleShiftSettingsWindow()
    } else if(toggleChoice === 'people'){
      this.props.togglePeopleSettingsWindow()
    } else {
      this.props.toggleMeetingSettingsWindow()
    }//if-else
  }//shiftSettingsToggle

  checkAvailability(personId, shiftNeed, selectedYear, selectedMonth, weekendDate, firstPerson){
    //for scheduling onCall weekends, the person has to be avail both Saturday AND Sunday
    // console.log('just checked for availability of ' + personId)

    //make sure their status is still 'active'
    let currentPerson = this.props.people.filter(item => item.id === personId)
    if(personId === firstPerson){ return false }
    if(currentPerson[0].isActive){
      //check and see if they have a manually added event for the day
      let currPersonEvents = this.props.eventsReducer.filter(evtItem => evtItem.personId === personId && evtItem.year === selectedYear && evtItem.month === selectedMonth && evtItem.day === weekendDate)
      let hasManualEvnt = currPersonEvents.length === 0
      let nextDayEvents = this.props.eventsReducer.filter(evtItem => evtItem.personId === personId && evtItem.year === selectedYear && evtItem.month === selectedMonth && evtItem.day === weekendDate+1)
      if(getDayName(selectedYear,selectedMonth,weekendDate) === 'Saturday' && nextDayEvents.length > 0){ hasManualEvnt = false }
      if(hasManualEvnt){
        //do they have a shift pref? day or night
        let timePref = 'none'
        if(currentPerson[0].rules.includes('weekend days')){
          timePref = 'day'
        } else if(currentPerson[0].rules.includes('weekend nights')){
          timePref = 'night'
        }//if-else


        //see if they are good to make the needed shift
        if(timePref === 'none' || shiftNeed === timePref){
          // console.log(currentPerson[0].name)
          // console.log(timePref)
          // console.log(shiftNeed)
          return true
        }//if
      }//if hasManualEvnt
    }//if isActive

    console.log('person  ' + personId + ' is not available')
    return false
  }//checkAvailability - returns bool

  getPerson(shift, selectedYear, selectedMonth, weekendDate, queue, firstPerson){
    //get next person in shift queue
    let currPersonId = queue[0]

    //check the availability of personOne and cycle through people if unavailable
    if(this.checkAvailability(currPersonId, shift, selectedYear, selectedMonth, weekendDate, firstPerson) === false){
      for(let i=1;i<queue.length;i++){
        if(this.checkAvailability(queue[i], shift, selectedYear, selectedMonth, weekendDate, firstPerson)){
          currPersonId = queue[i]
          break
        }//if
      }//for
      if(currPersonId === queue[0]){
        console.log('CONFLICT:: there was no one available for this shift')
        return 'CONFLICT'
      }//if conflict
    }//if
    return currPersonId
  }//getPerson

  rotateQueue(person, queue){
    //get index of move
    const firstIdx = queue.findIndex(item => item === person)

    //slice workingQueue
    let part1 = queue.slice(0,firstIdx)  
    let part2 = queue.slice(firstIdx+1)
    let slicedInitialQueue = part1.concat(part2)
    
    //push firstMove onto new array
    slicedInitialQueue.push(person)
    
    return slicedInitialQueue
  }//rotateQueue

  addWeekends(weekendList, selectedMonth, selectedYear){
    /*
     * For each weekend we need two people - one for the Day shift and one for the Night shift
     * We have a queue of people, and as long as the next two people are available, we use them
     * If one or both of the people next in queue are unavailable, we search for the next person who is.
     * For every auto-scheduled weekend shift, both the person has to be avail AND there should NOT be anything
     * already manually entered into the time slot
    */

    const eventsThisMonth =  this.props.eventsReducer.filter(item => item.year === selectedYear && item.month === getMonth(selectedMonth) )
    let currentWkendQueue = [...this.props.queues['weekend']]
    let firstPerson = 'none'
    
    //get needed slots
    let neededWeekendSlots = weekendList.map(function(weekendDate){
      const dayShift = eventsThisMonth.filter(item => item.day === weekendDate && item.shiftName === 'Day').length === 0 
      const nightShift = eventsThisMonth.filter(item => item.day === weekendDate && item.shiftName === 'Night').length === 0

      if(dayShift && nightShift){ return weekendDate }
    })//neededWeekendSlots

    //get available people for those slots
    let peopleToUse = neededWeekendSlots.map(function(weekendSlot){
      const dayPerson = this.getPerson('day', selectedYear, getMonth(selectedMonth), weekendSlot, currentWkendQueue, null)
      firstPerson = dayPerson
      const nightPerson = this.getPerson('night', selectedYear, getMonth(selectedMonth), weekendSlot, currentWkendQueue, firstPerson)

      if(getDayName(selectedYear,selectedMonth,weekendSlot) === 'Sunday'){
        let updatedQueue = this.rotateQueue(dayPerson, currentWkendQueue)
        currentWkendQueue = updatedQueue

        updatedQueue = this.rotateQueue(nightPerson, currentWkendQueue)
        currentWkendQueue = updatedQueue
      }//if

      return [dayPerson, nightPerson]
    }, this)//peopleToUse is an array of arrays

    //now to  create the events:
    //map over weekendSlots
    // console.log('peopleToUse: ')
    // console.log(peopleToUse)
    neededWeekendSlots.map(function(slot, idx){
      //Use index to find AM and PM person
      let amPerson = peopleToUse[idx][0]
      let pmPerson = peopleToUse[idx][1]

      //add the events
      if(amPerson === 'CONFLICT' || pmPerson === 'CONFLICT'){
        console.log('there was a CONFLICT bro!!!')
      } else {
        let morningDetails = {
          'personId': amPerson,
          'shiftName': 'Day',
          'day': slot,
          'selectedYear': selectedYear,
          'selectedMonthName': getMonth(selectedMonth),
          'shiftTime': 'AM',
          'dayType': 'weekend',
          'dayName': getDayName(selectedYear,selectedMonth,slot)
        }//morningDetails

        let eveningDetails = {
          'personId': pmPerson,
          'shiftName': 'Night',
          'day': slot,
          'selectedYear': selectedYear,
          'selectedMonthName': getMonth(selectedMonth),
          'shiftTime': 'PM',
          'dayType': 'weekend',
          'dayName': getDayName(selectedYear,selectedMonth,slot)
        }//eveningDetails
        
        //send the details to the reducer
        this.props.addEvent(morningDetails)
        this.props.addEvent(eveningDetails)

        //add the OFF days
        //slot has to be > 1 && < lastDayOfMonth
        //if slot === 2, the day cannot be sunday
        //if slot === lastDayOfmonth-1, the day cannot be Saturday

        
        ////if getDayName(selectedYear,selectedMonth,slot) === Saturday
        ////////if 'that dude with Mon Tues off'
        ////if getDayName(selectedYear,selectedMonth,slot) === Sunday
        ////////if 'that dude with Mon Tues off'

      }//if-else
    }, this)

    // //call the reducer to modify the queue in the store
    // //if the day is Sunday, update the queue
    // if(getDayName(selectedYear,selectedMonth,slot) === 'Sunday'){
    //   console.log('updating queue after sunday')
    this.props.replaceQueue('weekend', currentWkendQueue)
    // }//if
    
  }//addWeekends

  addOffDays(){
    /*
    *   for off days we have three diffferent scenarios:
    *     the first is if the first day of the month is weekend adjacent
    *     the second is the normal/default case where a weekend is not adjacent to 
    *       the beginning or end of the month
    *     the third is if the last day of the month is weekend adjacent
    *     in addition, there is one guy who wants to work the day immediately preceeding his call shift
    */
    console.log('Next, I will add the off days...')

  }//addOffDays

  autoFill(){
    /*
    * start with weekends
    * if the first day of month is a sun or the last day is a sat, there is a carry-over
    * isolate the weekend days for the month
    * add the info manually entered
    * now map over the weekend days adding the people where appropriate
    */
    
    //generate some date related info for the selected year and month
    let selectedYear = this.props.currentViewProperties.yearSelect
    let selectedMonth = this.props.currentViewProperties.monthSelect
    let monthDates = getMonthDates(selectedMonth, selectedYear) //for the days in a month (through 2021)
    let weekendList = getWeekends(monthDates.length+1, selectedMonth, selectedYear) //get a list of weekend days for the selected month
    const carryOver = getDayName(selectedYear, selectedMonth, weekendList[0]) === 'Sunday'

    //weekends: check to see if there is a carryover
    if(carryOver){
      /*
      * For the Sunday shift, use the people from last month
      * To do this, we look at previous events and get personId for am and pm shifts
      */

      ////last day of prev month
      const prevMonthLastDay = getMonthDates(selectedMonth-1, selectedYear).length

      ////prev Day shift
      const prevAm = this.props.eventsReducer.filter(item => item.year === 2018 && item.month === getMonth(selectedMonth-1) && item.day === prevMonthLastDay && item.shiftName === 'Day' && item.shiftTime === 'AM')
      const prevAmPerson = prevAm.length > 0 ? prevAm[0].personId : null

      ////prev Night shift
      const prevPm = this.props.eventsReducer.filter(item => item.year === 2018 && item.month === getMonth(selectedMonth-1) && item.day === prevMonthLastDay && item.shiftName === 'Night' && item.shiftTime === 'PM')
      const prevPmPerson = prevPm.length > 0 ? prevPm[0].personId : null

      ////create new objects and add new shifts (this,props.addEvent())
      let nextAmShiftDetails = {
        'personId': prevAmPerson,
        'shiftName': 'Day',
        'day': 1,
        'selectedYear': this.props.currentViewProperties.yearSelect,
        'selectedMonthName': getMonth(this.props.currentViewProperties.monthSelect),
        'shiftTime': 'AM',
        'dayType': 'weekend',
        'dayName': 'Sunday'
      }//nextAmShiftDetails

      let nextPmShiftDetails = {
        'personId': prevPmPerson,
        'shiftName': 'Night',
        'day': 1,
        'selectedYear': this.props.currentViewProperties.yearSelect,
        'selectedMonthName': getMonth(this.props.currentViewProperties.monthSelect),
        'shiftTime': 'PM',
        'dayType': 'weekend',
        'dayName': 'Sunday'
      }//nextPmShiftDetails
      
      ////send the details to the reducer
      if(prevAm.length > 0){
        this.props.addEvent(nextAmShiftDetails)
      }
      if(prevPm.length > 0){
        this.props.addEvent(nextPmShiftDetails)
      }

      //modify the weekendList, then add remaining weekends
      weekendList.shift()
      this.addWeekends(weekendList, selectedMonth, selectedYear)
      this.addOffDays()
    } else {
      //no carry-over
      this.addWeekends(weekendList, selectedMonth, selectedYear)
      this.addOffDays()
    }//if-else
  }//autoFill

  render(){
    return (
      <header>
        <div className="viewSelectBtns">
          <button type="button" className="viewSelectBtn active"><i className="fas fa-th fa-2x"></i></button>
          <button type="button" className="viewSelectBtn"><i className="far fa-calendar-alt fa-2x"></i></button>
        </div>
        <div className="headerDateSelector">
          <ClassicNavCal 
            currentViewProperties = {this.props.currentViewProperties}
            changeMonth = {this.props.changeMonth}
            changeYear = {this.props.changeYear}
          />
          <div className="dropdown">
            <div type="button" role="button" className="dropbtn">
              <i className="fas fa-bars fa-2x"></i>
              <div className="dropdownContent">
                <button onClick={() => this.settingsToggle('people')}>Edit People</button>
                <button onClick={() => this.settingsToggle('shifts')}>Edit Shifts</button>
                <button onClick={() => this.generateBlob()}>Export to Excel</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )//return
  }//render
}//header

//now to specify the areas of state to connect to
const mapStateToProps = state => ({
  currentViewProperties: state.currentViewProperties,
  people: state.people, 
  meetings: state.meetings,
  eventsReducer: state.eventsReducer,
  queues: state.queues
 })
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(Header)