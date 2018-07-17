import React, {Component}  from 'react'
import { getMonth } from '../../helpfulFiles/dateStuff'
import { person } from '../../data/sampleData'

import ClassicPersonCol from './ClassicPersonCol'
import { calendarData } from '../../data/calendarData'

export default class Grid extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeMonthSelection: this.props.currentViewProperties.monthSelect,
    }//state
  }//constructor


  /*********************************************************/
  //lifecycleMethods
  //mounting
  //static getDerivedStateFromProps(nextProps, prevState)
  componentDidMount(){console.log('grid component did mount')}

  //updating
  //static getDerivedStateFromProps(nextProps, prevState)
  //shouldComponentUpdate(nextProps, nextState)
  //getSnapshotBeforeUpdate(prevProps, prevState)
  componentDidUpdate(prevProps, prevState, snapshot){console.log('grid component did update')}

  //unmounting
  componentWillUnmount(){console.log('grid component will unmount')}

  //errorHandling
  componentDidCatch(error, info){'grid component caught an error'}
  /*******************************************************************/

  render(){
    let selectedMonth = this.props.currentViewProperties.monthSelect
    let selectedMonthName = getMonth(selectedMonth)
    let selectedYear = this.props.currentViewProperties.yearSelect

    //for the days in a month (through 2021)
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
    }


    //grab info from props (events reducer) and filter out WEEKENDS for each person
    let filteredEventList = calendarData[selectedYear][selectedMonthName]
    let weekendList = []
    for(let i=1;i<monthDates.length+1;i++){
      let tmpDay = filteredEventList[i]['dayType']
      if(tmpDay === 'weekend'){
        weekendList.push(i)
      }
    }//for
    // console.log('wkend list grid:  ' + weekendList)

    //the goal is to send classicpersoncol a list of either blanks or data
    //you can filter the event lis tfo r eavh person id
    //for person.map, i want to make a prop that is monthEventList
    //how many people are active?
    //for the numActivePeople.length
    let modalView = this.props.currentViewProperties.modal === "show" ? "modal" : "modal hidden"
    // let modalContentView = this.props.currentViewProperties.modal === "show" ? "modal-content" : "modal-content hidden"

    return (
      <section className="classicGridSection" role="application">
        <div className="classicGrid" role="grid">
          <div className="classicGridDateCol" role="grid">
            <div className="classicGridMonthName" role="columnheader">{getMonth(selectedMonth)}</div>
            {monthDates.map(day => <div className={weekendList.includes(day) ? "classicGridDate weekend" : "classicGridDate"}  role="rowheader" key={day}>{day}</div>)}
          </div>

          {person.map(item => <ClassicPersonCol 
            key={item.id} 
            monthDates={monthDates} 
            personID={item.id} 
            weekendList={weekendList}
            personDetails={item} 
            currentViewProperties={this.props.currentViewProperties}
            addEvent={this.props.addEvent}
            updateMaxId={this.props.updateMaxId} 
            eventList={monthDates.map(day => calendarData[selectedYear][selectedMonthName][day]['events'].filter(evt => evt.personId === item.id))}
            toggleModal={this.props.toggleModal}
            changeModalContentId={this.props.changeModalContentId}
            shifts={this.props.shifts}
            />)}

        </div>
        <div className={modalView} onClick={() => this.props.toggleModal()}></div>
      </section>
    )//return
  }//render
}//grid
