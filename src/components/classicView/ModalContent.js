/*
   - This component renders out a column of event data for each person designated as active
   - First we show the person's name, and then we map over each item in an array of events
   - Props Used:
      currentViewProperties
      eventList - this is what we filter for each person
      personDetails - the actual name, and ID of the person this column is for
      monthDates - {{ int }} the number of days in the selected month
      weekendList - an array containing the day number for saturday and sunday of the selected month
*/


import React, { Component } from 'react'
// import { getMonth } from '../../helpfulFiles/dateStuff'

export default class ModalContent extends Component{
  /*********************************************************/
  //lifecycleMethods
  //mounting
  //static getDerivedStateFromProps(nextProps, prevState)
  //componentDidMount(){ console.log('ModalContent component did mount') }//component did mount
      
  //updating
  //static getDerivedStateFromProps(nextProps, prevState)
  //shouldComponentUpdate(nextProps, nextState)
  //getSnapshotBeforeUpdate(prevProps, prevState)
  //componentDidUpdate(prevProps, prevState, snapshot){console.log('ModalContent component did update')}
  
  //unmounting
  //componentWillUnmount(){console.log('ModalContent component will unmount')}
  
  //errorHandling
  //componentDidCatch(error, info){'ModalContent component caught an error'}
  /*******************************************************************/
  
  render(){
    //in the render function we create the event list that is rendered out
    //FIRST setup variables and some date stuff
    const { shifts } = this.props
    const theBlank = ''

    if(shifts.length === 2){
      <div key={0} className="modalShift">
        <div>{shifts[0].shiftName}</div> 
        <button type="button"  className="exitBtn" onClick={() => this.props.excelExport()}><i className="fas fa-times"></i></button>
      </div>
      <div key={1}>
        {shifts[1].shiftName}
        <button type="button"  className="exitBtn" onClick={() => this.props.excelExport()}><i className="fas fa-times"></i></button>
      </div>
    } else if(shifts.length === 1){
      <div>
        {shifts[0].shiftName}
        <button type="button"  className="exitBtn" onClick={() => this.props.excelExport()}><i className="fas fa-times"></i></button>
      </div>
      <div className="addBtn" role="button" onClick={() => this.props.excelExport()}>
        <div className="left"><i className="fas fa-plus"></i></div>
        <div className="right">add</div>
      </div>
    } else{
      <div className="addBtn" role="button" onClick={() => this.props.excelExport()}>
        <div className="left"><i className="fas fa-plus"></i></div>
        <div className="right">add</div>
      </div>
    }

    return (
      <div className={this.props.currentViewProperties.modal === "show" && this.props.currentViewProperties.modalId === this.props.modalId ? "modal-content" : "modal-content hidden"}>
        {stuff}
      </div>
    )
  }//render
}// end ModalContent component
// {shifts.length > 0 ? (shifts.length > 1 ? [ <div key={0}>{shifts[0].shiftName}</div>, <div key={1}>{shifts[1].shiftName}</div> ] : shifts[0].shiftName)  : theBlank}