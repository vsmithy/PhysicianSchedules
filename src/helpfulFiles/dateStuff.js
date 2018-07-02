
import {calRefDateData} from '../data/calRefDateData'


export const dateRef = function(m,y){
  //look at data table
  console.log('y',y)
  console.log('m',m)
  const milliUTC = Date.UTC(y, m)
  const refDte = new Date(milliUTC)
  console.log('ref',refDte)
  
  //which day of the week does the 1st fall on
  const aDay = 86400000
  const weekdayOfFirst = refDte.getUTCDay()
  const milli = refDte - (weekdayOfFirst*aDay)

  //now to calc day
  let weeks = calRefDateData[y][m]['weeks']

  return [milli, weeks]
}//dateRef

export const dayNum = function(day){
  // let milli = day * 24 * 60 * 60 * 1000
  let theDate = Date.UTC(day)

  return theDate.toUTCString()
}//dayNum
//86400000


let monthName = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
}//end MonthName

export const getMonth = function(moNum){
  return monthName[moNum]
}