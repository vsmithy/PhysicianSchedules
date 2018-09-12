import { UPDATE_QUEUE } from '../actions/constants'
import { queuesData } from '../data/queuesData'

const initialState = queuesData

export default function queues(state = initialState, action){
  switch(action.type){
    case UPDATE_QUEUE:
      //isolate the proper queue
      const workingQueue = state[action.whichQueue]

      //get index of first move
      //slice workingQueue
      //slice(0,idx)  .concat slice(idx+1)
      //push firstMove onto new array
      
      //get index of second move
      //slice modified queue
      //slice(0,idx)  .concat slice(idx+1)
      //push secondMove onto array

      //copy state object

      //assign modified working queue to newState object

      //return newState

      return state
    default:
      return state
  }//switch
}//end of reducer