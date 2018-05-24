import React, { Component } from 'react'

export default class CalCell extends Component {
  //unpack date
  //filter event data based on view and date and flags
  //render cell with filtered event list
  render(){
    return (
      <td>iAmCell . {this.props.day}</td>
    )
  }
}