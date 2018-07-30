import React, {Component}  from 'react'
import XlsxPopulate from 'xlsx-populate'
import ClassicNavCal from './ClassicNavCal'

// import { makeWeekends } from '../../helpfulFiles/dateStuff'
// import { calendarData } from '../../data/calendarData'
import ShiftSettings from './ShiftSettings'
import { getMonth } from '../../helpfulFiles/dateStuff'

export default class Header extends Component {
  constructor(props){
    super(props)

    this.shiftSettingsToggle = this.shiftSettingsToggle.bind(this)
    this.peopleSettingsToggle = this.peopleSettingsToggle.bind(this)
    this.generateBlob = this.generateBlob.bind(this)
    this.getWorkbook = this.getWorkbook.bind(this)
    this.generate = this.generate.bind(this)

    this.exlOutput = React.createRef()

  }
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
  
  //this is the export to excel zone

  getWorkbook(){
    return XlsxPopulate.fromBlankAsync()
  }//getWorkbook
  
  generate(type){
    let selectedMonth = this.props.currentViewProperties.monthSelect
    let selectedMonthName = getMonth(selectedMonth)
    let selectedYear = this.props.currentViewProperties.yearSelect
    const person = this.props.people.filter(item => item.isActive === true)

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
    }


    return this.getWorkbook()
      .then(function (workbook) {
        //make the first column which is monthname and days of the month
        workbook.sheet(0).cell("A1").value(selectedMonthName)
        {monthDates.map(day => workbook.sheet(0).cell("A"+(day+1)).value(day))}
        
        //next for the people listed as active on the schedule
        {person.map(function(item, idx){
            //get the column letter
            let theColLetter = cols[idx]
            
            //create event list
            let eventList={monthDates.map(day => calendarData[selectedYear][selectedMonthName][day]['events'].filter(evt => evt.personId === item.id))}

            //return this stuff - show name in the first cell of the column
            workbook.sheet(0).cell(theColLetter + "1").value(item.name)
            
            //for the rest of the cells, map over the event list
                    //use this - workbook.sheet(0).cell("B2").value("Clinic\n Training")
            {eventList.map(item => { item.length > 0 ? (item.length > 1 ? [ <div key={0}>{item[0].shiftName}</div>, <div key={1}>{item[1].shiftName}</div> ] : item[0].shiftName)  : theBlank })}
          }  
        )}
          return workbook.outputAsync({ type: type })
      })
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
        })
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

  render(){
    return (
      <header>
        <div role="presentation" className="viewSelectBtns">
          <button type="button" className="viewSelectBtn active"><i className="fas fa-th fa-2x"></i></button>
          <button type="button" className="viewSelectBtn"><i className="far fa-calendar-alt fa-2x"></i></button>
        </div>
        <div role="presentation" className="headerDateSelector">
          <ClassicNavCal {...this.props} />
          <div role="presentation" className="dropdown">
            <div type="button" role="button" className="dropbtn">
              <i className="fas fa-bars fa-2x"></i>
              <div class="dropdownContent">
                <button onClick={() => this.peopleSettingsToggle()}>Edit People</button>
                <button onClick={() => this.shiftSettingsToggle()}>Edit Shifts</button>
                <button onClick={() => this.generateBlob()}>Export to Excel</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )//return
  }//render
}//header      


//toggleModal
//show the shift settings component

