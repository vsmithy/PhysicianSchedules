import { ADD_EVENT } from '../actions/constants'
import { calendarData } from '../data/calendarData'

const initialState = calendarData

export default function eventsReducer(state = initialState, action){
  switch(action.type){
    case ADD_EVENT:
      console.log('making event ' + action.eventDetails.shiftName + '  person: ' + action.eventDetails.personId + '  day: ' + action.eventDetails.day)

      //if it exists, update
      //if it doesn't exist, create it

      //test
      

      return state
    default:
      return state
  }//switch
}//end of reducer