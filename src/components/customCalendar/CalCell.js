import React, { Component } from 'react'
import {dayNum} from '../../helpfulFiles/dateStuff'

export default class CalCell extends Component {
  //unpack date
  //filter event data based on view and date and flags
  //render cell with filtered event list
  render(){
    console.log('in cal date')
    console.log('props day is ',this.props.day)
    const propsDay = new Date(this.props.day)
    const calDate = propsDay.getUTCDate()

    return (
      <td  className='calCell'>{calDate}</td>
    )
  }
}