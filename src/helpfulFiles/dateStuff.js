
import {calRefDateData} from '../data/calRefDateData'


export const dateRef = function(m,y){
  //look at data table
  let day = calRefDateData[y][m]['start']
  let weeks = calRefDateData[y][m]['weeks']

  console.log('day is '+day)
  console.log('weeks is '+weeks)
  return [day, weeks]
}//dateRef
