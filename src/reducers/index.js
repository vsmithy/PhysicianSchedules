import { combineReducers } from 'redux'

//bring in the other reducers
import currentViewProperties from './currentViewProperties'
import shifts from './shifts'
import conflicts from './conflicts'
import stats from './stats'
import eventsReducer from './eventsReducer'
import people from './people'
import meetings from './meetings'
import notes from './notes'
import queues from './queues'

const rootReducer = combineReducers({
  currentViewProperties,
  shifts,
  conflicts,
  stats,
  eventsReducer,
  people,
  meetings,
  notes,
  queues
}) //combineReducers

export default rootReducer