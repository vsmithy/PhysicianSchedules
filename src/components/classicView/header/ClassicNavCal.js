/*
 * This component returns year selector and the little month circles at the top of the app. Months older
 * than the current month will be black, the rest of the year will be white.
 * The actively selected month will be red.
*/

import React, {Component}  from 'react'

export default class ClassicNavCal extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeMonthSelection: this.props.currentViewProperties.monthSelect
    }//state
  }//constructor

  updateMonth(idx){
    this.props.changeMonth(idx)
    this.setState({activeMonthSelection: idx})
  }//updateMonth

  render(){
    const { currentViewProperties } = this.props
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const whichClass = (idx) => currentViewProperties.currentMonth > idx ? 'headerCalCircleColorPast' : 'headerCalCircleColor'
    let showBackArrow = currentViewProperties.yearSelect === 2018 ? '' : <button type="button" onClick={() => this.props.changeYear(-1)}><i className="fas fa-chevron-left"></i></button>

    return (
      <div className="headerFlexContainer" role="presentation">
        <div role="presentation" className="headerCalNavYear">
          {showBackArrow}
          <span>{this.props.currentViewProperties.yearSelect}</span>
          <button type="button" onClick={() => this.props.changeYear(1)}><i className="fas fa-chevron-right"></i></button>
        </div>
        <ol role="listbox" className="headerCalNavMonth">
          {
            months.map((month, i) => (
              <li key={i} value={i}><a className={this.state.activeMonthSelection === i ? 'headerCalCircleColorActive' : whichClass(i)} onClick={() => this.updateMonth(i)}>{month[0]}</a></li>
            ))
          }
        </ol>
      </div>
    )//return
  }//render
}//ClassicNavCal