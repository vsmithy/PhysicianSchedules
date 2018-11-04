import { getMonth, getWeekends, getMonthDates, getDayName } from '../helpfulFiles/dateStuff'
import XlsxPopulate from 'xlsx-populate'

export function checkAvailability(personId, shiftNeed, selectedYear, selectedMonth, weekendDate, firstPerson){
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

export function getPerson(shift, selectedYear, selectedMonth, weekendDate, queue, firstPerson){
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

export function rotateQueue(person, queue){
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

export function addWeekends(weekendList, selectedMonth, selectedYear){
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

export function addOffDays(){
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

export function autoFill(){
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
