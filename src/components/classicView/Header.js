import React, {Component}  from 'react'
import ClassicNavCal from './ClassicNavCal'

// import { makeWeekends } from '../../helpfulFiles/dateStuff'
// import { calendarData } from '../../data/calendarData'

export default class Header extends Component {
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
  
  render(){
    return (
      <header>
        <div role="presentation" className="viewSelectBtns">
          <button type="button" className="viewSelectBtn active"><i className="fas fa-th fa-2x"></i></button>
          <button type="button" className="viewSelectBtn"><i className="far fa-calendar-alt fa-2x"></i></button>
        </div>
        <div role="presentation" className="headerDateSelector">
          <ClassicNavCal {...this.props} />
          <div role="presentation" className="headerExportBtns">
            <button type="button"  className="headerExportBtn" onClick={() => this.props.excelExport()}><i className="far fa-file-excel fa-2x"></i></button>
            <button type="button"  className="headerExportBtn" onClick={() => this.props.pdfExport()}><i className="far fa-file-pdf fa-2x"></i></button>
          </div>
        </div>
      </header>
    )//return
  }//render
}//header      