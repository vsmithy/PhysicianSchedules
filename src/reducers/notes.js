import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE } from '../actions/constants'
import { notesSampleData } from '../data/sampleData'

const initialState = notesSampleData

export default function notes(state = initialState, action){
  switch(action.type){
    case ADD_NOTE:
      //if empty just return state
      if(action.data === ''){
        return state
      } else if(state.find(item => item.comments === action.data && item.year === action.year && item.month == action.month) !== undefined){
        //if a duplicate just return state
        return state
      } else {
        //else return new state
        return [
          {
            id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
            comments: action.data,
            year: action.year,
            month: action.month
          },
          ...state
        ]
      }//else
    case REMOVE_NOTE:
      return state.filter(item =>  item.id !== action.id)
    case EDIT_NOTE:
      return state.map(item => item.id === action.id ? {
        id: item.id,
        comments: action.data,
        year: item.year,
        month: item.month
      } : item)
    default:
      return state
  }//switch
}//end of reducer