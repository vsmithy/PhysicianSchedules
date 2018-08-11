import { ADD_SHIFT, REMOVE_SHIFT } from '../actions/constants'
import { shiftList } from '../data/sampleData'

const initialState = shiftList

export default function shifts(state = initialState, action){
  switch(action.type){
    case ADD_SHIFT:
    if(action.data !== ''){
      return [
        ...state,
        {
          'id': state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
          'shiftName':action.data
        }
      ]
    } else return state
    case REMOVE_SHIFT:
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }//switch
}//end of reducer