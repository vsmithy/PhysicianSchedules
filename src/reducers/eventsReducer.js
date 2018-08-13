import { ADD_EVENT, UPDATE_EVENT, REMOVE_EVENT } from '../actions/constants'
import { calendarData } from '../data/calendarData'

const initialState = calendarData

export default function eventsReducer(state = initialState, action){
  switch(action.type){
    case ADD_EVENT:
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
      return state
    case REMOVE_EVENT:
      return state
    default:
      return state
  }//switch
}//end of reducer