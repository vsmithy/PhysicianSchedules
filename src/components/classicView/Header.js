import React, {Component}  from 'react'
import ClassicNavCal from './ClassicNavCal'
export default class Header extends Component {
  render(){
    return (
      <header className='classicHeader'>
        <select name="viewSelect" id="viewSelect1">
          <option value="classic">Classic View</option>
          <option value="orview">OR Schedule</option>
          <option value="resource">People View</option>
          <option value="leave">Leave Schedule</option>
        </select>
        <ClassicNavCal {...this.props} />
        <span className='exportIcons'>
          <button onClick={() => this.props.excelExport()}><i className="far fa-file-excel fa-2x"></i></button>
          <button onClick={() => this.props.pdfExport()}><i className="far fa-file-pdf fa-2x"></i></button>
        </span>
      </header>
    )//return
  }//render
}//header