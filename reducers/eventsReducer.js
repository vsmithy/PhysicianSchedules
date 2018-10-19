import { ADD_EVENT, UPDATE_EVENT, REMOVE_EVENT } from '../actions/constants'
import { calendarData } from '../data/calendarData'

const initialState = calendarData

export default function eventsReducer(state = initialState, action){
  switch(action.type){
    case ADD_EVENT:
      /*  First, check to see if the new event is a meeting (Admin-xx)
       *  if so AND the thing currently written in the cell is also a meeting 
       *  on the same day, then just concat the name of the meetings together
      */
      if(action.eventDetails.shiftName.startsWith('Admin')){
        //check and see if there is already a meeting in that slot
        if(state.filter(item => (item.personId === action.eventDetails.personId && 
          item.day === action.eventDetails.day && 
          item.month === action.eventDetails.selectedMonthName &&
          item.year === action.eventDetails.selectedYear &&
          item.shiftTime === action.eventDetails.shiftTime &&
          item.shiftName.startsWith('Admin'))).length === 1 ){
          //if so, concat the two
          let firstMeeting = state.filter(item => (item.personId === action.eventDetails.personId && 
            item.day === action.eventDetails.day && 
            item.month === action.eventDetails.selectedMonthName &&
            item.year === action.eventDetails.selectedYear &&
            item.shiftTime === action.eventDetails.shiftTime &&
            item.shiftName.startsWith('Admin')))[0].shiftName
          let nextMeetingNumber = action.eventDetails.shiftName.substring(6, action.eventDetails.shiftName.length)
          let combinedMeeting = firstMeeting + '/' + nextMeetingNumber

          //now build new item with the concatenated shift names
          let newItem = {
            id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1, 
            year:action.eventDetails.selectedYear,
            month:action.eventDetails.selectedMonthName,
            day:action.eventDetails.day,
            dayName:action.eventDetails.dayName,
            dayType:action.eventDetails.dayType,
            personId: action.eventDetails.personId,
            shiftName: combinedMeeting,
            shiftTime: action.eventDetails.shiftTime
          }//newItem

          //return new state
          return [
              newItem,
            ...state
          ]
        }//inner if
      }//if
      
      //otherwise, it isn't a conflicting admin
      let newItem = {
        id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1, 
        year:action.eventDetails.selectedYear,
        month:action.eventDetails.selectedMonthName,
        day:action.eventDetails.day,
        dayName:action.eventDetails.dayName,
        dayType:action.eventDetails.dayType,
        personId: action.eventDetails.personId, 
        shiftName: action.eventDetails.shiftName,
        shiftTime: action.eventDetails.shiftTime
      }
      return [
          newItem,
        ...state
      ]
    case UPDATE_EVENT:
      return state.map(item => item.id === action.eventDetails.id ? {
        id: item.id, 
        year: item.year,
        month:item.month,
        day:item.day,
        dayName:item.dayName,
        dayType:item.dayType,
        personId: item.personId,
        shiftName: action.eventDetails.shiftName,
        shiftTime: item.shiftTime
      } : item)
    case REMOVE_EVENT:
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }//switch
}//end of reducer