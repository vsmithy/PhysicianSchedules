import React, {Component}  from 'react'
import ClassicNavCal from './ClassicNavCal'

// import { makeWeekends } from '../../helpfulFiles/dateStuff'
// import { calendarData } from '../../data/calendarData'
import ShiftSettings from './ShiftSettings'

export default class Header extends Component {
  constructor(props){
    super(props)

    this.shiftSettingsToggle = this.shiftSettingsToggle.bind(this)
    this.peopleSettingsToggle = this.peopleSettingsToggle.bind(this)

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
  shiftSettingsToggle(){
    //change modalContentId: none0
    this.props.changeModalContentId('none0')

    //toggleModal
    this.props.toggleModal()

    //show shiftSettings component
    this.props.toggleShiftSettingsWindow()
  }

  peopleSettingsToggle(){
    //change modalContentId: none0
    this.props.changeModalContentId('none0')

    //toggleModal
    this.props.toggleModal()

    //show shiftSettings component
    this.props.togglePeopleSettingsWindow()
  }

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
                <a href="#" onClick={() => this.peopleSettingsToggle()}>Edit People</a>
                <a href="#" onClick={() => this.shiftSettingsToggle()}>Edit Shifts</a>
                <a href="#">Export to Excel</a>
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

