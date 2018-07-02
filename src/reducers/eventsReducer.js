import { ADD_EVENT } from '../actions/constants'
import { events } from '../data/sampleData'

const initialState = events

export default function eventsReducer(state = initialState, action){
  switch(action.type){
    case ADD_EVENT:
      console.log('making event ' + action.eventDetails.shiftName)
      return [
        {
          id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
          date: action.eventDetails.date, 
          'dayType': 2,
          'dayPortion': 'full',
          'personId': action.eventDetails.personId,
          'shiftName': action.eventDetails.shiftName,
          'notes': [],
        },
        ...state
      ]
    default:
      return state
  }//switch
}//end of reducer