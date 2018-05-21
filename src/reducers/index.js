import { combineReducers } from 'redux'

//bring in the other reducers
import currentViewProperties from './currentViewProperties'
import shifts from './shifts'

const rootReducer = combineReducers({
  currentViewProperties,
  shifts
}) //combineReducers

export default rootReducer