import { ADD_PERSON, ACTIVATE_PERSON, DEACTIVATE_PERSON,  CHANGE_ROLE, ADD_RULE, EDIT_RULE, REMOVE_RULE } from '../actions/constants'
import { person } from '../data/sampleData'
import { docList } from '../data/docList'

// const initialState = person
const initialState = docList

export default function people(state = initialState, action){
  switch(action.type){
    case ADD_PERSON:
      return [
        ...state,
        {
          'id': state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
          'name': action.name,
          'jobRole': action.jobRole,
          'rules': [],
          'isActive': true,
        },
      ]
    case ACTIVATE_PERSON:
      return state.map(item => item.id === action.id ? {
        id: item.id,
        isActive: true,
        jobRole: item.jobRole,
        name: item.name,
        rules: item.rules
      }  : item)
    case DEACTIVATE_PERSON:
      return state.map(item => item.id === action.id ? {
        id: item.id,
        isActive: false,
        jobRole: item.jobRole,
        name: item.name,
        rules: item.rules
      } : item)
    case CHANGE_ROLE:
      return state.map(item => item.id === action.id ? {
        id: item.id,
        isActive: item.isActive,
        jobRole: action.jobRole,
        name: item.name,
        rules: item.rules
      } : item)
    case ADD_RULE:
      return state
    case EDIT_RULE:
      return state
    case REMOVE_RULE:
      return state
    default:
      return state
  }//switch
}//end of reducer 