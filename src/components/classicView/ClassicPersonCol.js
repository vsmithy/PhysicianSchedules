import React, { Component } from 'react'


export default class ClassicPersonCol extends Component{
  /*********************************************************/
  //lifecycleMethods
  //mounting
  //static getDerivedStateFromProps(nextProps, prevState)
  componentDidMount(){console.log('classicPersonCol component did mount')}

  //updating
  //static getDerivedStateFromProps(nextProps, prevState)
  //shouldComponentUpdate(nextProps, nextState)
  //getSnapshotBeforeUpdate(prevProps, prevState)
  componentDidUpdate(prevProps, prevState, snapshot){console.log('classicPersonCol component did update')}

  //unmounting
  componentWillUnmount(){console.log('classicPersonCol component will unmount')}

  //errorHandling
  componentDidCatch(error, info){'classicPersonCol component caught an error'}
  /*******************************************************************/

  handleNewEvent(item, idx, monthEventList){
    // console.log('add event clicked for ' + this.props.personDetails.name + ' details: ' + item + ' and ' + idx)

    //make utc date
    const { currentViewProperties } = this.props
    let yearSelect = currentViewProperties.yearSelect
    let monthSelect = currentViewProperties.monthSelect

    let dateSelected = Date.UTC(yearSelect, monthSelect, idx+1)
    // console.log('current shift ' + this.props.currentViewProperties.shiftSelect)

    let newEventDetails = {
      'date': dateSelected,
      'personId': this.props.personDetails.id,
      'shiftName': this.props.currentViewProperties.shiftSelect,
    }

    this.props.addEvent(newEventDetails)
    monthEventList[idx] = this.props.currentViewProperties.shiftSelect
  }

  render(){
    const { currentViewProperties, eventList, personID, monthDates } = this.props
    let yearSelect = currentViewProperties.yearSelect
    let monthSelect = currentViewProperties.monthSelect

    // console.log('the event list: ' + this.props.eventList[1]["events"][0])

    let chosenDate = Date.UTC(yearSelect, monthSelect, 1)
    let nextMonth = Date.UTC(yearSelect, monthSelect + 1, 1)


    //grab info from props (events reducer) and filter out events for each person
    let theirEvents = []
    for(let i=1;i<monthDates.length+1;i++){
      let tmpList = eventList[i]['events'].filter(item => item.personId === personID)
      theirEvents.push(tmpList)
    }
    console.log(theirEvents)



    // theirEvents.map(evnt => console.log(this.props.personDetails.name + " all events:  " + (new Date(evnt.date)).getUTCDate()))
    // console.log(this.props.personDetails.name + " all events:  " + theirEvents)


    //add events to array that considers monthdates
    let monthEventList = []
    for(let i=0;i<monthDates.length;i++){
      monthEventList[i] = ' '
    }//fills list with blanks
  
    //add theirEvents to the vertical column of items
    for(let j=0; j<theirEvents.length; j++){
      if(theirEvents[j].length > 0){
        monthEventList[j] = theirEvents[j][0].shiftName   //add something for multiple shifts per day
      }
    }//add this person's events to the monthEventList array



    // console.log(this.props.personDetails.name + " event list:  " + monthEventList)
    // console.log('theirEvents ' + theirEvents)
    return (
      <div className="classicGridPersonCol" role="column">
            <div className="classicGridPersonName" role="columnheader">{this.props.personDetails.name}</div>
            {monthEventList.map((item, idx) => <div key={idx} className="classicGridCell" role="cell" onClick={() => this.handleNewEvent(item, idx, monthEventList)}>{item}</div>)}
        </div>
    )
  }
}

// if getUTCDay() is 0 or 6