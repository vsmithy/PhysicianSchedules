import { CHANGE_VIEW, CHANGE_MONTH } from '../actions/constants'

const initialDate = new Date()
const initialState = {
  mealFilter: 'Breakfast', 
  chosenDate: initialDate, 
  chosenRecipeSearch: 'breakfastData',
  newSearchBreakfast: true,
  newSearchLunch: true,
  newSearchDinner: true,
  newSearchDessert: true,
}

export default function inventory(state = initialState, action){
  switch(action.type){
    case CHANGE_VIEW:
      if(!(state.every(item => action.name !== item.name))){
        return state
      } else {
          return [
            { 
              name: action.name,
              amount: action.amount,
              checked: false,
              id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1
            },
            ...state
          ]
      }//else
    case CHANGE_MONTH:
      if(action.name === '' || action.name === ' '){
        return state
      } else if(!(state.every(item => (action.name+action.amount) !== (item.name+item.amount) ))){
        return state
      } else{
        return state.map( item => 
          item.id === action.id ? { ...item, name: action.name, amount: action.amount } : item
        )
      }
    default:
      return state
  }//switch
}//inventory