import { ADD_EVENT, UPDATE_EVENT } from '../actions/constants'
import { calendarData } from '../data/calendarData'

const initialState = calendarData

export default function eventsReducer(state = initialState, action){
  switch(action.type){
    case ADD_EVENT:
      //if it doesn't exist, create it
      if(action.eventDetails.eventId === 'none'){
        let newState = {}
        Object.assign(newState,state)

        /*
        FIND THE MAX EVENT ID:
          normally i would use something like id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1, but since
          each day has its own arry of events, i keep track of the maxId in settings, and pass it to this reducer when needed
        */
        const highestId = action.eventDetails.maxEventId


        const newItemToAdd = {
          id: highestId + 1,  //id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1
          personId: action.eventDetails.personId,
          shiftName: action.eventDetails.shiftName,
          eventDetails: ""
        }//newItemToAdd

        //push a new item on to the specific eventsarray which can be located via action.eventDetails
        newState[action.eventDetails.selectedYear][action.eventDetails.selectedMonthName][action.eventDetails.day]['events'].push(newItemToAdd)
        return newState

      } else {
        //if it exists, update
        // const oldItem = state[action.eventDetails.selectedYear][action.eventDetails.selectedMonthName][action.eventDetails.day]['events'].filter(evt => evt.id === action.eventDetails.eventId)[0]
        let newState = {}
        Object.assign(newState, state)
        newState[action.eventDetails.selectedYear][action.eventDetails.selectedMonthName][action.eventDetails.day]['events'].filter(evt => evt.id === action.eventDetails.eventId)[0]['shiftName'] = action.eventDetails.shiftName
        return newState
      }//else
      case UPDATE_EVENT:
        let newState = {}
        Object.assign(newState, state)
        newState[action.eventDetails.selectedYear][action.eventDetails.selectedMonthName][action.eventDetails.day]['events'].filter(evt => evt.id === action.eventDetails.eventId)[0]['shiftName'] = action.eventDetails.shiftName
        return newState
    default:
      return state
  }//switch
}//end of reducer