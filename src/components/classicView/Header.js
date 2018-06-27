import React, {Component}  from 'react'
import ClassicNavCal from './ClassicNavCal'
export default class Header extends Component {
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