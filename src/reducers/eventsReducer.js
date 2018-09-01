import { ADD_EVENT, UPDATE_EVENT, REMOVE_EVENT } from '../actions/constants'
import { calendarData } from '../data/calendarData'

const initialState = calendarData

export default function eventsReducer(state = initialState, action){
  switch(action.type){
    case ADD_EVENT:
      /*  First, check to see if the new event is a meeting (Admin-xx)
       *  if so AND the new event is also a meeting on the same day, then 
       *  just concat the name of the meetings together
      */

      // if(action.eventDetails.shiftName startsWith 'Admin'){
      //   nested if(state.filter(personId, day, month, year, shiftTime, and shiftName starts with 'Admin')){
      //     concat the two and return the new item
      //   }//inner if
      // }//if
      
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