import { UPDATE_QUEUE, REPLACE_QUEUE } from '../actions/constants'
import { queuesData } from '../data/queuesData'

const initialState = queuesData

export default function queues(state = initialState, action){
  switch(action.type){
    case UPDATE_QUEUE:
      //isolate the proper queue
      const workingQueue = state[action.whichQueue]

      //get index of first move
      const firstIdx = workingQueue.findIndex(item => item === action.firstMove)
      
      //slice workingQueue
      let part1 = workingQueue.slice(0,firstIdx)  
      let part2 = workingQueue.slice(firstIdx+1)
      const slicedInitialQueue = part1.concat(part2)
      
      //push firstMove onto new array
      slicedInitialQueue.push(action.firstMove)
      
      //get index of second move
      const secondIdx = slicedInitialQueue.findIndex(item => item === action.secondMove)

      //slice modified queue
      part1 = slicedInitialQueue.slice(0,secondIdx)  
      part2 = slicedInitialQueue.slice(secondIdx+1)
      const slicedSecondQueue = part1.concat(part2)

      //push secondMove onto array
      slicedSecondQueue.push(action.secondMove)

      //copy state object
      let newState = {}
      Object.assign(newState, state)

      //assign modified working queue to newState object
      newState[action.whichQueue] = slicedSecondQueue

      //return newState
      return newState
    case REPLACE_QUEUE:
      //copy state object
      let replacedState = {}
      Object.assign(replacedState, state)

      //assign modified working queue to newState object
      replacedState[action.whichQueue] = action.queue

      return replacedState
    default:
      return state
  }//switch
}//end of reducer