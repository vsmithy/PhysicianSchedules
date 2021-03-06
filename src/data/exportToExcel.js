import XlsxPopulate from 'xlsx-populate'
import { getMonth, getMonthDates, getWeekends, getDayName } from '../helpfulFiles/dateStuff'


/*********************************************************
          this is the export to excel zone bro
          the generateBase64 function => calls the genenrate function => which calls  the getWorkbook function
  *********************************************************/
function getWorkbook(){
  return XlsxPopulate.fromBlankAsync()
}//getWorkbook

function generate(type, context, props){
  let selectedYear = context.yearSelect
  let selectedMonth = context.monthSelect
  let selectedMonthName = getMonth(selectedMonth)
  const person = props.people.filter(item => item.isActive === true)
  const meetings = props.meetings
  let eventsReducer = props.eventsReducer

  let monthDates = getMonthDates(selectedMonth, selectedYear)
  let weekendList = getWeekends(monthDates.length+1, selectedMonth, selectedYear) //get a list of weekend days for the selected month

  //for the excel column letters
  const cols = ["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]

  return getWorkbook()
    .then(function (workbook) {
      //since we have AM and PM shift, we should make the list of items equal
      //twice the length of the selected month - one AM and PM shift per day
      let doubleMonthLength = []
      for(let i=0;i < 2*monthDates.length;i++){
        doubleMonthLength[i]=i+1
      }//for

      //make the first column: monthname and days of the month
      workbook.sheet(0).cell("A1").value(selectedMonthName)
      {
        doubleMonthLength.map(function(day, idx) { 
            if(weekendList.includes((Math.floor(idx/2)+1))){
              return day%2 === 0 ? workbook.sheet(0).cell("A"+(day+1)).value(getDayName(selectedYear,selectedMonth,(Math.floor(idx/2)+1))).style("fill","eff8ff") : workbook.sheet(0).cell("A"+(day+1)).value((Math.floor(idx/2)+1)).style("fill","eff8ff")
            } else {
              return day%2 === 0 ? workbook.sheet(0).cell("A"+(day+1)).value(getDayName(selectedYear,selectedMonth,(Math.floor(idx/2)+1))) : workbook.sheet(0).cell("A"+(day+1)).value((Math.floor(idx/2)+1))
            }// if-else
          }//function
        )//doublemonthlength.map
      }

      //next for the people listed as active on the schedule
      //make an array of arrays, each sub-array will belong to a different person
      let personShiftData = person.map(function(item){
          //grab the data for this person for the selected month and year
          let personEvents = eventsReducer.filter(evt => evt.year === selectedYear && evt.month === selectedMonthName && item.id === evt.personId)

          //now we put it all together, one array with doubleMonthLength entries in it
          //we alternate between AM and PM using the index%2
          //for each day, if an event exists print it, otherwise, print spaces
          let eventCellData = doubleMonthLength.map(function(mDate, idx){
            if(idx%2 === 0){
              //this is the AM shift
              return personEvents.filter(evt => evt.day === (Math.floor(idx/2)+1) && evt.shiftTime === 'AM').length > 0 ? personEvents.filter(evt => evt.day === (Math.floor(idx/2)+1) && evt.shiftTime === 'AM')[0].shiftName : ''
            } else {
              //this is the PM shift
              return personEvents.filter(evt => evt.day === (Math.floor(idx/2)+1) && evt.shiftTime === 'PM').length > 0 ? personEvents.filter(evt => evt.day === (Math.floor(idx/2)+1) && evt.shiftTime === 'PM')[0].shiftName : ''
            }//if
          })//doubleMonthLength.map

          return eventCellData
        })//personShiftData

      //after exporting, there are certain work shifts that should be styled in a specific way
      let cellStyles = {
        "OR-4":"d62613",
        "OR-6":"d62613",
        "OR-8":"d62613",
        "LDD":"ffdbfc",
        "LDN":"ffffba",
        "Inprocessing":"ffd99e",
        "CMD":"bcd8ff",
        "Ward":"9aedb7",
      }//cellStyles

      const styleCalc = function(idx, evtItem){
        if(cellStyles[evtItem]){
          return cellStyles[evtItem]
        } else if(weekendList.includes((Math.floor(idx/2)+1))){
          return "eff8ff"
        }//if-else
      }//styleCalc

      //column headers - map over the people, and print name in first cell of column
      {person.map( (item, idx) => workbook.sheet(0).cell(cols[idx] + "1").value(item.name) )}

      //next map down the events of each person
      {personShiftData.map( (evt, idx) => evt.map( (evtItem, i) => workbook.sheet(0).cell(cols[idx] + (i+2) ).value(evtItem).style("fill",styleCalc(i,evtItem) )))}

      //next, at the bottom of the spreadsheet, break the meetings up and then list them
      const firstFew = meetings.filter((mtg, i) => i<8)
      const secondFew = meetings.filter((mtg, i) => i>=8 && i<15)
      const lastFew = meetings.filter((mtg, i) => i>=15)
      {firstFew.map( (mtg, idx) => workbook.sheet(0).cell("A" + (idx+65)).value(mtg.id + " - " + mtg.data) )}
      {secondFew.map( (mtg, idx) => workbook.sheet(0).cell("H" + (idx+65)).value(mtg.id + " - " + mtg.data) )}
      {lastFew.map( (mtg, idx) => workbook.sheet(0).cell("P" + (idx+65)).value(mtg.id + " - " + mtg.data) )}

      return workbook.outputAsync({ type: type })
    })//then
}//generate

export function generateBase64(context, props) {
  return generate("base64", context, props)
    .then(function (base64) {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            throw new Error("Navigating to data URI is not supported in IE.")
        } else {
            window.location.href = "data:" + XlsxPopulate.MIME_TYPE + ";base64," + base64
        }
    })
    .catch(function (err) {
        alert(err.message || err)
        throw err
    })
}