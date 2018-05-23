import { RESOLVE_CONFLICT } from '../actions/constants'

//import some sample data
import { conflictsData } from '../data/sampleData'
const initialState = conflictsData

export default function conflicts(state = initialState, action){
  switch(action.type){
    case RESOLVE_CONFLICT:
      return state
    default:
      return state
  }//switch
}//end of reducer