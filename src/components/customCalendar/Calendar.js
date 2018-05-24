/*   
Data Needed
year
month
each day has a list of events
each event will have a person and shift assignment
there will be an OR Flag that sipnifies whether or not it is an OB OR day
you can show/hide holidays
weekends should be colored? maybe a flg also
the view filter will filter the cal to only show a certain type of event
each compponent renders out a rectangle
the month fliter selects a start and end day number 

each cal is made up of 5 row components
each row component is made up of 7 days

props:
month
year



native settings:





*/

import React, { Component } from 'react'
import CalCell from './CalCell'
import { dateRef } from '../../helpfulFiles/dateStuff'

export default class Calendar extends Component {


// renderChoice(weeks){
//   if(weeks === 6){
//     return (
// //render out a table with 6 rows, and for each row pass it a collection of dates
// return(
//   <table>
//     <tbody>
//       <tr>
//         <td>Sun</td>
//         <td>Mon</td>
//         <td>Tues</td>
//         <td>Wed</td>
//         <td>Thurs</td>
//         <td>Fri</td>
//         <td>Sat</td>
//       </tr>
//       <tr>{week1Dates.map(day => <CalCell day={day} key={day} events={this.props.events} /> )}</tr>
//       <tr>{week2Dates.map(day => <CalCell day={day} key={day}  /> )}</tr>
//       <tr>{week3Dates.map(day => <CalCell day={day} key={day}  /> )}</tr>
//       <tr>{week4Dates.map(day => <CalCell day={day} key={day}  /> )}</tr>
//       <tr>{week5Dates.map(day => <CalCell day={day} key={day}  /> )}</tr>
//       <tr>{week6Dates.map(day => <CalCell day={day} key={day}  /> )}</tr>
//     </tbody>
//   </table>
// )
//   )
// } else{ return (
// //render out a table with 6 rows, and for each row pass it a collection of dates
// return(
//   <table>
//     <tbody>
//       <tr>
//         <td>Sun</td>
//         <td>Mon</td>
//         <td>Tues</td>
//         <td>Wed</td>
//         <td>Thurs</td>
//         <td>Fri</td>
//         <td>Sat</td>
//       </tr>
//       <tr>{week1Dates.map(day => <CalCell day={day} key={day} events={this.props.events} /> )}</tr>
//       <tr>{week2Dates.map(day => <CalCell day={day} key={day}  /> )}</tr>
//       <tr>{week3Dates.map(day => <CalCell day={day} key={day}  /> )}</tr>
//       <tr>{week4Dates.map(day => <CalCell day={day} key={day}  /> )}</tr>
//       <tr>{week5Dates.map(day => <CalCell day={day} key={day}  /> )}</tr>
//       <tr>{week6Dates.map(day => <CalCell day={day} key={day}  /> )}</tr>
//     </tbody>
//   </table>
// )
//   )
// }
// }//renderChoice


render(){
//setup variables
const { currentViewProperties } = this.props
let monthSelect = currentViewProperties.monthSelect
let yearSelect = currentViewProperties.yearSelect

//calc start and end date
const findDate = dateRef(monthSelect, yearSelect)  //returns a 5-digit number for the date
let startDate = findDate[0]
let weeks = findDate[1]
console.log('startDate '+startDate)
//get all the days for the view
const viewDays = []
for(let i=0;i<42;i++){
  viewDays.push(startDate + i)
}
console.log('viewDays  '+viewDays.length)
//now we calculate the dates to map over for each week
const week1Dates = viewDays.filter(day => day < startDate + 7)
const week2Dates = viewDays.filter(day => day >= startDate+7 && day<startDate+14)
const week3Dates = viewDays.filter(day => day >= startDate+14 && day<startDate+21)
const week4Dates = viewDays.filter(day => day >= startDate+21 && day<startDate+28)
const week5Dates = viewDays.filter(day => day >= startDate+28 && day<startDate+35)
const week6Dates = viewDays.filter(day => day >= startDate+35)

console.log('week1Dates '+week1Dates)
console.log('week2Dates '+week2Dates)
console.log('week3Dates '+week3Dates)
console.log('week4Dates '+week4Dates)
console.log('week5Dates '+week5Dates)
console.log('week5Dates '+week6Dates)

return(
  <table>
    <tbody>
      <tr>
        <td>Sun</td>
        <td>Mon</td>
        <td>Tues</td>
        <td>Wed</td>
        <td>Thurs</td>
        <td>Fri</td>
        <td>Sat</td>
      </tr>
      <tr>{week1Dates.map(day => <CalCell day={day} key={day} events={'events'} /> )}</tr>
      <tr>{week2Dates.map(day => <CalCell day={day} key={day} events={'events'} /> )}</tr>
      <tr>{week3Dates.map(day => <CalCell day={day} key={day} events={'events'} /> )}</tr>
      <tr>{week4Dates.map(day => <CalCell day={day} key={day} events={'events'} /> )}</tr>
      <tr>{week5Dates.map(day => <CalCell day={day} key={day} events={'events'} /> )}</tr>
      <tr>{week6Dates.map(day => <CalCell day={day} key={day} events={'events'} /> )}</tr>
    </tbody>
  </table>
)
}
}