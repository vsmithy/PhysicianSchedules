import React, { Component } from 'react'


export default class ClassicPersonCol extends Component{
  constructor(props){
    super(props)

    this.state = {
      monthEventList: [],
      // weekendList: []
    }//state
  }//constructor
  /*********************************************************/
  //lifecycleMethods
  //mounting
  //static getDerivedStateFromProps(nextProps, prevState)
  componentDidMount(){
    console.log('classicPersonCol component did mount')

  }//component did mount
  
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
  
  handleNewEvent(item, idx, monthEventList, eventId){
    console.log('add event clicked for ' + this.props.personDetails.name + ' details: ' + item + ' and ' + idx)
    console.log(monthEventList)
    
    //update the month event list
    //call action to update store
    
    
    
    
    // //make utc date
    // const { currentViewProperties } = this.props
    // let yearSelect = currentViewProperties.yearSelect
    // let monthSelect = currentViewProperties.monthSelect
    
    // let dateSelected = Date.UTC(yearSelect, monthSelect, idx+1)
    // // console.log('current shift ' + this.props.currentViewProperties.shiftSelect)
    
    let newEventDetails = {
        'personId': this.props.personDetails.id,
        'shiftName': this.props.currentViewProperties.shiftSelect,
        'day': idx+1,
        'eventId': eventId
      }
      
      // this.props.addEvent(newEventDetails)
      // monthEventList[idx] = this.props.currentViewProperties.shiftSelect
    }
    
    render(){
      //FIRST setup variables and some date stuff
      const { currentViewProperties, eventList, personID, monthDates } = this.props
          
      //grab info from props (eventsReducer) and filter out WEEKENDS for each person
      // console.log('monthDates.length:  ' + monthDates.length)
      let weekendList = []
      for(let i=1;i<monthDates.length+1;i++){
        let tmpDay = eventList[i]['dayType']
        if(tmpDay === 'weekend'){
          weekendList.push(i)
        }////if
      }////for
      // console.log('weekend List:  ' + weekendList)
      // this.setState({ weekendList })

      //make a blank list that will render if no events
      let monthEventList = []
      for(let i=0;i<monthDates.length;i++){
        monthEventList[i] = ' '
      }////for


      //SECOND grab and format the data for this particular person
      //grab info from props (eventsReducer) and filter out events for each person
      let theirEvents = []
      for(let i=1;i<monthDates.length+1;i++){
        let tmpList = eventList[i]['events'].filter(item => item.personId === personID)
        theirEvents.push(tmpList)
      }//// for
      // console.log('theirEvents  ' + theirEvents)

      //THIRD  make the list that will be rendered, and set it to local state
      //add theirEvents to the list that, once rendered, will be the vertical column of items
      for(let j=0; j<theirEvents.length; j++){
        if(theirEvents[j].length > 1){
          monthEventList[j] = [theirEvents[j][0].shiftName]   //add something for multiple shifts per day
          // monthEventList[j] = [theirEvents[j][0].shiftName, theirEvents[j][1].shiftName]   //add something for multiple shifts per day
        }////if
        else if(theirEvents[j].length > 0){
          monthEventList[j] = theirEvents[j][0].shiftName   //add something for multiple shifts per day
        }//// else if
      }//// for
      // console.log(monthEventList)
      // this.setState({ monthEventList })
      // console.log('weekend List:  ' + weekendList)
      return (
        <div className="classicGridPersonCol" role="column">
            <div className="classicGridPersonName" role="columnheader">{this.props.personDetails.name}</div>
            {monthEventList.map((item, idx) => <div key={idx} className={weekendList.includes(idx+1) ? "classicGridCell weekend" : "classicGridCell"} role="cell" onClick={() => this.handleNewEvent(item, idx, monthEventList)}>{item}</div>)}
        </div>
    )
  }
}// end ClassicPersonCol component

//make a data structure that includes all of the weekend days wor each month.
//then when mapping over the monthEventList if weekendList.includes(idx) className = classicGridCell weekend else classicGridCell