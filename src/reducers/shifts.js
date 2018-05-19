import { ADD_SHIFT, UPDATE_SHIFT, REMOVE_SHIFT } from '../actions/constants'
import { shiftList } from '../data/sampleData'

const initialState = shiftList

export default function shifts(state = initialState, action){
  switch(action.type){
    case ADD_SHIFT:
      return [
        ...state,
        {
          'id': state.length,
          'shiftName':action.data
        }
      ]
    case UPDATE_SHIFT:
      return state
    case REMOVE_SHIFT:
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }//switch
}//end of reducer