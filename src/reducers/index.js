import { combineReducers } from 'redux'

//bring in the other reducers
import shifts from './shifts'
import eventsReducer from './eventsReducer'
import people from './people'
import meetings from './meetings'
import notes from './notes'

const rootReducer = combineReducers({
  shifts,
  eventsReducer,
  people,
  meetings,
  notes
}) //combineReducers

export default rootReducer