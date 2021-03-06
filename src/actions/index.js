import * as types from './constants'

//Classic View - Header
export const changeYear = (year) => ({ type: types.CHANGE_YEAR, year })
export const changeMonth = (month) => ({ type: types.CHANGE_MONTH, month })
export const excelExport = () => ({ type: types.EXCEL_EXPORT })

//shifts
export const addShift = (data) => ({ type: types.ADD_SHIFT, data })
export const removeShift = (id) => ({ type: types.REMOVE_SHIFT, id })
export const changeSelectedShft = (shift) => ({ type: types.CHANGE_SELECTED_SHFT, shift })

//conflicts
export const resolveConflicts = (id) => ({ type: types.RESOLVE_CONFLICT, id })

//stats
export const addStats = () => ({ type: types.ADD_STAT })

//events
export const addEvent = eventDetails => ({ type: types.ADD_EVENT, eventDetails })
export const updateEvent = eventDetails => ({ type: types.UPDATE_EVENT, eventDetails })
export const removeEvent = id => ({ type: types.REMOVE_EVENT, id })

//currentViewProperties
export const updateMaxId = () => ({ type: types.UPDATE_MAX_ID })
export const toggleModal = () => ({ type: types.TOGGLE_MODAL })
export const toggleShiftSettingsWindow = () => ({ type: types.TOGGLE_SHIFT_SETTINGS })
export const togglePeopleSettingsWindow = () => ({ type: types.TOGGLE_PEOPLE_SETTINGS })
export const toggleMeetingSettingsWindow = () => ({ type: types.TOGGLE_MEETING_SETTINGS })
export const changeModalContentId = (id) => ({ type: types.CHANGE_MODAL_CONTENT_ID, id })

//people
export const addPerson = (name, jobRole) => ({ type: types.ADD_PERSON, name, jobRole })
export const activatePerson = (id) => ({ type: types.ACTIVATE_PERSON, id })
export const deactivatePerson = (id) => ({ type: types.DEACTIVATE_PERSON, id })
export const changeRole = (id, jobRole) => ({ type: types.CHANGE_ROLE, id, jobRole })
export const addRule = () => ({ type: types.ADD_RULE })
export const editRule = () => ({ type: types.EDIT_RULE })
export const removeRule = () => ({ type: types.REMOVE_RULE })

//meetings
export const addMeeting = (data) => ({ type: types.ADD_MEETING, data })
export const removeMeeting = (id) => ({ type: types.REMOVE_MEETING, id })
export const editMeeting = (id, data) => ({ type: types.EDIT_MEETING, id, data })

//notes
export const addNote = (data, year, month) => ({ type: types.ADD_NOTE, data, year, month })
export const removeNote = (id) => ({ type: types.REMOVE_NOTE, id })
export const editNote = (id, data) => ({ type: types.EDIT_NOTE, id, data })

//shiftQueues For Auto-Delete
export const updateQueue = (whichQueue, firstMove, secondMove) => ({ type: types.UPDATE_QUEUE, whichQueue, firstMove, secondMove })
export const replaceQueue = (whichQueue, queue) => ({ type: types.REPLACE_QUEUE, whichQueue, queue })