import { combineReducers } from 'redux'

//bring in the other reducers
import currentViewProperties from './currentViewProperties'
import shifts from './shifts'
import conflicts from './conflicts'
import stats from './stats'

const rootReducer = combineReducers({
  currentViewProperties,
  shifts,
  conflicts,
  stats,
}) //combineReducers

export default rootReducer