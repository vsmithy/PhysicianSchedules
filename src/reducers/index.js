import { combineReducers } from 'redux'

//bring in the other reducers
import currentViewProperties from './currentViewProperties'
import shifts from './shifts'
import conflicts from './conflicts'
import stats from './stats'
import eventsReducer from './eventsReducer'
import people from './people'
import meetings from './meetings'

const rootReducer = combineReducers({
  currentViewProperties,
  shifts,
  conflicts,
  stats,
  eventsReducer,
  people,
  meetings,
}) //combineReducers

export default rootReducer