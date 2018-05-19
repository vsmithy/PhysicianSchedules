import { combineReducers } from 'redux'

//bring in the other reducers
import classicViewData from './classicViewData'
import currentViewProperties from './currentViewProperties'
import shifts from './shifts'

const rootReducer = combineReducers({
  classicViewData,
  currentViewProperties,
  shifts
}) //combineReducers

export default rootReducer