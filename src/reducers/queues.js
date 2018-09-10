import { UPDATE_QUEUE } from '../actions/constants'
import { queuesData } from '../data/queuesData'

const initialState = queuesData

export default function queues(state = initialState, action){
  switch(action.type){
    case UPDATE_QUEUE:
      //action.whichQueue [weekend, ldd, ldn, cmd, ward, g]
      //action.whichMove bumpone, bumptwo, rotate
      return state
    default:
      return state
  }//switch
}//end of reducer