import { ADD_EVENT, UPDATE_EVENT, REMOVE_EVENT } from '../actions/constants'
import { calendarData } from '../data/calendarData'

const initialState = calendarData

export default function eventsReducer(state = initialState, action){
  switch(action.type){
    case ADD_EVENT:
      console.log('in the events reducer to add something...')
      console.log('state is')
      console.log(state)
      let newItem = [
        {
        id: action.eventDetails.maxEventId + 1,  //id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1
        personId: action.eventDetails.personId,
        shiftName: action.eventDetails.shiftName,
        year:action.eventDetails.selectedYear,
        month:action.eventDetails.selectedMonthName,
        day:action.eventDetails.day,
        dayType:action.eventDetails.dayType,
        shiftTime: action.eventDetails.shiftTime
      },
      ...state
    ]
    console.log(newItem)
      // const newItemToAdd = {
      //   id: action.eventDetails.maxEventId + 1,  //id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1
      //   personId: action.eventDetails.personId,
      //   shiftName: action.eventDetails.shiftName,
      //   year:action.eventDetails.selectedYear,
      //   month:action.eventDetails.selectedMonthName,
      //   day:action.eventDetails.day,
      //   dayType:action.eventDetails.dayType,
      //   shiftTime: action.eventDetails.shiftTime
      // }//newItemToAdd

      // console.log(newItemToAdd)

      //push a new item on to the specific eventsarray which can be located via action.eventDetails
      return [
          {
          id: action.eventDetails.maxEventId + 1,  //id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1
          personId: action.eventDetails.personId,
          shiftName: action.eventDetails.shiftName,
          year:action.eventDetails.selectedYear,
          month:action.eventDetails.selectedMonthName,
          day:action.eventDetails.day,
          dayType:action.eventDetails.dayType,
          shiftTime: action.eventDetails.shiftTime
        },
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