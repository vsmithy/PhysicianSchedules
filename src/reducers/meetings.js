import { ADD_MEETING, REMOVE_MEETING, EDIT_MEETING } from '../actions/constants'
import { meetingList } from '../data/sampleData'

const initialState = meetingList

export default function meetings(state = initialState, action){
  switch(action.type){
    case ADD_MEETING:
    if(action.data !== ''){
      return [
        ...state,
          {
            id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
            data: action.data
          }
      ]
    } else return state
    case REMOVE_MEETING:
      return state.filter(item => item.id !== action.id)
    case EDIT_MEETING:
      return state.map(item => item.id === action.id ? {id: item.id, data: action.data} : item)
    default:
      return state
  }//switch
}//end of reducer