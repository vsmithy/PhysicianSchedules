import * as types from './constants'

//Classic View - Header
export const changeYear = (year) => ({ type: types.CHANGE_YEAR, year })
export const changeMonth = (month) => ({ type: types.CHANGE_MONTH, month })
export const excelExport = () => ({ type: types.EXCEL_EXPORT })
export const pdfExport = () => ({ type: types.PDF_EXPORT })

//shifts
export const addShift = (data) => ({ type: types.ADD_SHIFT, data })
export const updateShift = (id, data) => ({ type: types.UPDATE_SHIFT, id, data })
export const removeShift = (id) => ({ type: types.REMOVE_SHIFT, id })
export const changeSelectedShft = (shift) => ({ type: types.CHANGE_SELECTED_SHFT, shift })

//conflicts
export const resolveConflicts = (id) => ({ type: types.RESOLVE_CONFLICT, id })

//stats
export const addStats = () => ({ type: types.ADD_STAT })

//events
export const addEvent = eventDetails => ({ type: types.ADD_EVENT, eventDetails })

//currentViewProperties
export const updateMaxId = () => ({ type: types.UPDATE_MAX_ID })
export const toggleModal = () => ({ type: types.TOGGLE_MODAL })

























// let instance = axios.create({
//   baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes',
//   timeout: 10000,
//   headers: {
//     'X-Mashape-Authorization': 'Jkhb6JFSa8mshtAeiugBBA43soUip11qPvmjsnOQUUS7RI7vtE',   //dev
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'dataType': 'json',
//   }
// })


// export function getRecipes(category) {
//   const getRandomRecipes = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=40&tags=" + category
//   return (dispatch, getState) => {
//     return instance.get(getRandomRecipes)
//     .then(resp => {
//       if(category === 'breakfast'){
//         dispatch(setBreakfastData({recipes: resp}))
//       } else if(category === 'lunch'){
//         dispatch(setLunchData({recipes: resp}))
//       } else if(category === 'dinner'){
//         dispatch(setDinnerData({recipes: resp}))
//       } else {
//         dispatch(setDessertData({recipes: resp}))
//       }
//     })
//     .catch( (ex) => {
//       console.log(ex)
//     })
//   }//return
// }//fetchRecipes