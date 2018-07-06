import { ADD_EVENT } from '../actions/constants'
import { calendarData } from '../data/calendarData'

const initialState = calendarData

export default function eventsReducer(state = initialState, action){
  switch(action.type){
    case ADD_EVENT:
      console.log('making event ' + action.eventDetails.shiftName)
      return state
    default:
      return state
  }//switch
}//end of reducer