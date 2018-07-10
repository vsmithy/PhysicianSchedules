import { CHANGE_YEAR, CHANGE_MONTH, CHANGE_SELECTED_SHFT, UPDATE_MAX_ID } from '../actions/constants'

let d = new Date()

const initialState = {
  yearSelect: d.getFullYear(),
  currentMonth: d.getMonth(),
  monthSelect: d.getMonth(),
  viewSelect: 'classicView',
  shiftSelect: '',
  maxEventId: 103
}

export default function currentViewProperties(state = initialState, action){
  switch(action.type){
    case CHANGE_YEAR:
      let newYear = state.yearSelect + action.year
      return {
        yearSelect: newYear,
        monthSelect: state.monthSelect,
        currentMonth: state.currentMonth,
        viewSelect: state.viewSelect,
        shiftSelect: state.shiftSelect,
        maxEventId: state.maxEventId
      }
    case CHANGE_MONTH:
      return {
        yearSelect: state.yearSelect,
        monthSelect: action.month,
        currentMonth: state.currentMonth,
        viewSelect: state.viewSelect,
        shiftSelect: state.shiftSelect,
        maxEventId: state.maxEventId
      }
    case CHANGE_SELECTED_SHFT:
      return {
        yearSelect: state.yearSelect,
        monthSelect: state.monthSelect,
        currentMonth: state.currentMonth,
        viewSelect: state.viewSelect,
        shiftSelect: action.shift,
        maxEventId: state.maxEventId
      }
    case UPDATE_MAX_ID:
      return {
        yearSelect: state.yearSelect,
        monthSelect: state.monthSelect,
        currentMonth: state.currentMonth,
        viewSelect: state.viewSelect,
        shiftSelect: state.shiftSelect,
        maxEventId: state.maxEventId + 1
      }
    default:
      return state
  }//switch
}//end of reducer