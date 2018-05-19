import { CHANGE_YEAR, CHANGE_MONTH } from '../actions/constants'

let d = new Date()

const initialState = {
  yearSelect: d.getFullYear(),
  currentMonth: d.getMonth(),
  monthSelect: d.getMonth(),
  viewSelect: 'classicView'
}

export default function currentViewProperties(state = initialState, action){
  switch(action.type){
    case CHANGE_YEAR:
      let newYear = state.yearSelect + action.year
      return {
        yearSelect: newYear,
        monthSelect: state.monthSelect,
        currentMonth: state.currentMonth,
        viewSelect: state.viewSelect
      }
    case CHANGE_MONTH:
      return {
        yearSelect: state.yearSelect,
        monthSelect: action.month,
        currentMonth: state.currentMonth,
        viewSelect: state.viewSelect
      }
    default:
      return state
  }//switch
}//end of reducer