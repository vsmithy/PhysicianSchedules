import { CHANGE_YEAR, CHANGE_MONTH, CHANGE_SELECTED_SHFT, UPDATE_MAX_ID, TOGGLE_MODAL, CHANGE_MODAL_CONTENT_ID, TOGGLE_SHIFT_SETTINGS } from '../actions/constants'

let d = new Date()

const initialState = {
  yearSelect: d.getFullYear(),
  currentMonth: d.getMonth(),
  monthSelect: d.getMonth(),
  viewSelect: 'classicView',
  shiftSelect: '',
  maxEventId: 103,
  modal: "hide",
  modalId: "none0",
  shiftSettingsWindow: "hide",
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
        maxEventId: state.maxEventId,
        modal: state.modal,
        modalId: state.modalId,
        shiftSettingsWindow: state.shiftSettingsWindow
      }
    case CHANGE_MONTH:
      return {
        yearSelect: state.yearSelect,
        monthSelect: action.month,
        currentMonth: state.currentMonth,
        viewSelect: state.viewSelect,
        shiftSelect: state.shiftSelect,
        maxEventId: state.maxEventId,
        modal: state.modal,
        modalId: state.modalId,
        shiftSettingsWindow: state.shiftSettingsWindow
      }
    case CHANGE_SELECTED_SHFT:
      return {
        yearSelect: state.yearSelect,
        monthSelect: state.monthSelect,
        currentMonth: state.currentMonth,
        viewSelect: state.viewSelect,
        shiftSelect: action.shift,
        maxEventId: state.maxEventId,
        modalId: state.modalId,
        shiftSettingsWindow: state.shiftSettingsWindow
      }
    case UPDATE_MAX_ID:
      return {
        yearSelect: state.yearSelect,
        monthSelect: state.monthSelect,
        currentMonth: state.currentMonth,
        viewSelect: state.viewSelect,
        shiftSelect: state.shiftSelect,
        maxEventId: state.maxEventId + 1,
        modal: state.modal,
        modalId: state.modalId,
        shiftSettingsWindow: state.shiftSettingsWindow
      }
    case TOGGLE_MODAL:
      return {
        yearSelect: state.yearSelect,
        monthSelect: state.monthSelect,
        currentMonth: state.currentMonth,
        viewSelect: state.viewSelect,
        shiftSelect: state.shiftSelect,
        maxEventId: state.maxEventId,
        modal: state.modal === "show" ? "hide" : "show",
        modalId: state.modalId,
        shiftSettingsWindow: state.shiftSettingsWindow
      }
    case TOGGLE_SHIFT_SETTINGS:
      return {
        yearSelect: state.yearSelect,
        monthSelect: state.monthSelect,
        currentMonth: state.currentMonth,
        viewSelect: state.viewSelect,
        shiftSelect: state.shiftSelect,
        maxEventId: state.maxEventId,
        modal: state.modal,
        modalId: state.modalId,
        shiftSettingsWindow: state.shiftSettingsWindow === "hide" ? "show" : "hide",
      }
    case CHANGE_MODAL_CONTENT_ID:
      return {
        yearSelect: state.yearSelect,
        monthSelect: state.monthSelect,
        currentMonth: state.currentMonth,
        viewSelect: state.viewSelect,
        shiftSelect: state.shiftSelect,
        maxEventId: state.maxEventId,
        modal: state.modal,
        modalId: action.id,
        shiftSettingsWindow: state.shiftSettingsWindow
      }
    default:
      return state
  }//switch
}//end of reducer