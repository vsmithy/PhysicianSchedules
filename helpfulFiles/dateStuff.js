export const dayNum = function(day){
  // let milli = day * 24 * 60 * 60 * 1000
  let theDate = Date.UTC(day)

  return theDate.toUTCString()
}//dayNum


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
}//getMonth

export const makeWeekends = function (calendarData) {
  let dataCopy = {}
  Object.assign(dataCopy, calendarData)
  const years = [2018,2019,2020,2021]
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  
  for(let i=0;i < years.length;i++){
    for(let j=0;j<12;j++){
      for(let k=1;k<32;k++){
        if(dataCopy[years[i]][months[j]][k]){
          //make a date
          let milliUTC = Date.UTC(years[i],j,k)
          let d = new Date(milliUTC)
          
          //calc which day of week
          let dayOfWeek = d.getUTCDay()
          
          //if day of week is 0 or 6, make dayType = 'weekend'
          if(dayOfWeek === 0 || dayOfWeek === 6){
            dataCopy[years[i]][months[j]][k].dayType = 'weekend'
          }//inner if
        }//if
      }//for number of days
    }//for numher of months
  }//for number of years

  return dataCopy
}//makeWeends


export const getWeekends = function(monthlength, selectedMonth, selectedYear){
  let weekendList = []
  for(let i=1;i<monthlength;i++){

    //make a date
    let milliUTC = Date.UTC(selectedYear,selectedMonth,i)
    // console.log(milliUTC)
    let d = new Date(milliUTC)

    // console.log(d)
    //calc which day of week
    let dayOfWeek = d.getUTCDay()

    //if day of week is 0 or 6, make dayType = 'weekend'
    if(dayOfWeek === 0 || dayOfWeek === 6){
      weekendList.push(i)
    }//if
  }//for

  return weekendList
}//getWeekends

export const getMonthDates = function(selectedMonth, selectedYear){
  let monthDates = []
  if([0, 2, 4, 6, 7, 9, 11].includes(selectedMonth)){
    for(let i=0;i<31;i++){
      monthDates.push(i+1)
    }
  }
  else if([3,5,8,10].includes(selectedMonth)){
    for(let i=0;i<30;i++){
      monthDates.push(i+1)
    }
  }
  else if(selectedMonth === 1 &&  selectedYear === 2020){
    for(let i=0;i<29;i++){
      monthDates.push(i+1)
    }
  }
  else{
    for(let i=0;i<28;i++){
      monthDates.push(i+1)
    }
  }//else

  return monthDates
}//getMonthDates

export const getDayName = function(selectedYear,selectedMonth,dayNbr) {
  //make a date
  let milliUTC = Date.UTC(selectedYear,selectedMonth,dayNbr)
  // console.log(milliUTC)
  let d = new Date(milliUTC)

  // console.log(d)
  //calc which day of week
  let dayOfWeek = d.getUTCDay()

  //day Name of week
  let daysNames = {
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday"
  }//daysNames

  return daysNames[dayOfWeek]
}//getDayName