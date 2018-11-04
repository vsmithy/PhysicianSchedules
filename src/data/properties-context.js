import React from 'react'

const d = new Date()
export const initialSettings = {
  yearSelect: d.getFullYear(),
  currentMonth: d.getMonth(),
  monthSelect: d.getMonth(),
  viewSelect: 'classicView',
  shiftSelect: '',
  maxEventId: 103,
  modal: "hide",
  modalId: "none0",
  shiftSettingsWindow: "hide",
  peopleSettingsWindow: "hide",
}//initialSettings

export const cvpContext = React.createContext(initialSettings)