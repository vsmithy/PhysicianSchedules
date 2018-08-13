import React, {Component}  from 'react'
import XlsxPopulate from 'xlsx-populate'
import ClassicNavCal from './ClassicNavCal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//local files and components
import * as actionCreators from '../../actions'
import { getMonth } from '../../helpfulFiles/dateStuff'
import { calendarData } from '../../data/calendarData'

class Header extends Component {
  constructor(props){
    super(props)

    this.shiftSettingsToggle = this.shiftSettingsToggle.bind(this)
    this.peopleSettingsToggle = this.peopleSettingsToggle.bind(this)
    this.meetingsToggle = this.meetingsToggle.bind(this)
    this.generateBlob = this.generateBlob.bind(this)
    this.getWorkbook = this.getWorkbook.bind(this)
    this.generate = this.generate.bind(this)
    this.exlOutput = React.createRef()

  }//constructor

  /*********************************************************/
  //lifecycleMethods
  //mounting
  //static getDerivedStateFromProps(nextProps, prevState)
  // componentDidMount(){console.log('header component did mount')}

  // //updating
  // //static getDerivedStateFromProps(nextProps, prevState)
  // //shouldComponentUpdate(nextProps, nextState)
  // //getSnapshotBeforeUpdate(prevProps, prevState)
  // componentDidUpdate(prevProps, prevState, snapshot){console.log('header component did update')}

  // //unmounting
  // componentWillUnmount(){console.log('header component will unmount')}

  // //errorHandling
  // componentDidCatch(error, info){'header component caught an error'}
  /*******************************************************************/
  
  /*********************************************************
          this is the export to excel zone bro bro
          generateBlob => calls genenrate => which calls getWorkbook
  *********************************************************/
  getWorkbook(){
    return XlsxPopulate.fromBlankAsync()
  }//getWorkbook
  
  generate(type){
    let selectedMonth = this.props.currentViewProperties.monthSelect
    let selectedMonthName = getMonth(selectedMonth)
    let selectedYear = this.props.currentViewProperties.yearSelect
    let theBlank = ''
    const person = this.props.people.filter(item => item.isActive === true)
    const meetings = this.props.meetings

    //for the excel column letters
    const cols = ["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ"]

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
    }//else


    return this.getWorkbook()
      .then(function (workbook) {
        //make the first column: monthname and days of the month
        workbook.sheet(0).cell("A1").value(selectedMonthName)
        {monthDates.map(day => workbook.sheet(0).cell("A"+(day+1)).value(day))}
        
        //next for the people listed as active on the schedule
        //make an array of arrays, each sub-array will belong to a different person
        let personShiftData = person.map(function(item){
            let personEvents = monthDates.map(day => calendarData[selectedYear][selectedMonthName][day]['events'].filter(evt => evt.personId === item.id))

            let eventCellData = personEvents.map(evt => evt.length > 0 ? (evt.length > 1 ? evt[0].shiftName + " \n" + evt[1].shiftName : evt[0].shiftName) : theBlank)

            return eventCellData
          })

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

        //map over the people, and print name in first cell of column
        {person.map( (item, idx) => workbook.sheet(0).cell(cols[idx] + "1").value(item.name) )}

        //map down the events of each person
        {personShiftData.map( (evt, idx) => evt.map( (evtItem, i) => workbook.sheet(0).cell(cols[idx] + (i+2) ).value(evtItem).style("fill",cellStyles[evtItem]) ))}

        //next, list the meetings
        {meetings.map( (mtg, idx) => workbook.sheet(0).cell("A" + (idx+34)).value(mtg.id + " - " + mtg.data) )}

        return workbook.outputAsync({ type: type })
      })//then
  }//generate
  
  generateBlob(){
    return this.generate()
        .then(function (blob) {
          let url = window.URL.createObjectURL(blob)
          window.open(url)
          window.URL.revokeObjectURL(url)
        })
        .catch(function (err) {
            alert(err.message || err)
            throw err
        })//catch
  }//generateBlob
  
  
  
  /*******************************************************************/

  shiftSettingsToggle(){
    //change modalContentId: none0
    this.props.changeModalContentId('none0')

    //toggleModal
    this.props.toggleModal()

    //show shiftSettings component
    this.props.toggleShiftSettingsWindow()
  }//shiftSettingsToggle

  peopleSettingsToggle(){
    //change modalContentId: none0
    this.props.changeModalContentId('none0')

    //toggleModal
    this.props.toggleModal()

    //show shiftSettings component
    this.props.togglePeopleSettingsWindow()
  }//peopleSettingsToggle

  meetingsToggle(){
    //change modalContentId: none0
    this.props.changeModalContentId('none0')

    //toggleModal
    this.props.toggleModal()

    //show meetings component
    this.props.toggleMeetingSettingsWindow()
  }//meetingsToggle

  render(){
    return (
      <header>
        <div role="presentation" className="viewSelectBtns">
          <button type="button" className="viewSelectBtn active"><i className="fas fa-th fa-2x"></i></button>
          <button type="button" className="viewSelectBtn"><i className="far fa-calendar-alt fa-2x"></i></button>
        </div>
        <div role="presentation" className="headerDateSelector">
          <ClassicNavCal 
            currentViewProperties = {this.props.currentViewProperties}
            changeMonth = {this.props.changeMonth}
            changeYear = {this.props.changeYear}
          />
          <div role="presentation" className="dropdown">
            <div type="button" role="button" className="dropbtn">
              <i className="fas fa-bars fa-2x"></i>
              <div className="dropdownContent">
                <button onClick={() => this.peopleSettingsToggle()}>Edit People</button>
                <button onClick={() => this.shiftSettingsToggle()}>Edit Shifts</button>
                <button onClick={() => this.meetingsToggle()}>Edit Meetings</button>
                <button onClick={() => this.generateBlob()}>Export to Excel</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )//return
  }//render
}//header

//now to specify the areas of state to connect to
const mapStateToProps = state => ({
  currentViewProperties: state.currentViewProperties,
  people: state.people, 
  meetings: state.meetings,
 })
 
 const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch))
 
 export default connect(mapStateToProps, mapDispatchToProps)(Header)