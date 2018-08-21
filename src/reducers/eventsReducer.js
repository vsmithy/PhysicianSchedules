import { ADD_EVENT, UPDATE_EVENT, REMOVE_EVENT } from '../actions/constants'
import { calendarData } from '../data/calendarData'

const initialState = calendarData

export default function eventsReducer(state = initialState, action){
  switch(action.type){
    case ADD_EVENT:
      console.log('in add event reducer')
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