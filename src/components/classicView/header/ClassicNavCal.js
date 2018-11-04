/*
 * This component returns year selector and the little month circles at the top of the app. Months older
 * than the current month will be black, the rest of the year will be white.
 * The actively selected month will be red.
*/

import React, {Component}  from 'react'
import { CurrSettingsContext } from '../../../containers/ClassicContainer'

export default class ClassicNavCal extends Component {
  constructor(props){
    super(props)

    const d = new Date()
    this.state = {
      activeMonthSelection: d.getMonth()
    }//state
  }//constructor

  updateMonth(idx, ctx){
    ctx.updaterFunctions.updateMonth(idx)
    this.setState({activeMonthSelection: idx})
  }//updateMonth
  
  render(){
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const whichClass = (idx, mo) => mo > idx ? 'headerCalCircleColorPast' : 'headerCalCircleColor'

    return (
      <CurrSettingsContext.Consumer>
        {context => (
          <div className="headerFlexContainer" role="presentation">
            <div role="presentation" className="headerCalNavYear">
              {context.yearSelect === 2018 ? '' : <button type="button" onClick={() => context.updaterFunctions.updateYear(-1)}><i className="fas fa-chevron-left"></i></button>}
              <span>{context.yearSelect}</span>
              <button type="button" onClick={() => context.updaterFunctions.updateYear(1)}><i className="fas fa-chevron-right"></i></button>
            </div>
            <ol role="listbox" className="headerCalNavMonth">
              {
                months.map((month, i) => (
                  <li key={i} value={i}><a className={this.state.activeMonthSelection === i ? 'headerCalCircleColorActive' : whichClass(i, context.currentMonth)} onClick={() => this.updateMonth(i, context)}>{month[0]}</a></li>
                ))
              }
            </ol>
          </div>
        )}
      </CurrSettingsContext.Consumer>
    )//return
  }//render
}//ClassicNavCal