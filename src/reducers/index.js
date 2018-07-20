import { combineReducers } from 'redux'

//bring in the other reducers
import currentViewProperties from './currentViewProperties'
import shifts from './shifts'
import conflicts from './conflicts'
import stats from './stats'
import eventsReducer from './eventsReducer'
import people from './people'

const rootReducer = combineReducers({
  currentViewProperties,
  shifts,
  conflicts,
  stats,
  eventsReducer,
  people,
}) //combineReducers

export default rootReducer