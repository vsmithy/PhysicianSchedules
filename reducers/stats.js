import { ADD_STAT } from '../actions/constants'

//import some sample data
import { statsData } from '../data/sampleData'
const initialState = statsData

export default function stats(state = initialState, action){
  switch(action.type){
    case ADD_STAT:
      return state
    default:
      return state
  }//switch
}//end of reducer