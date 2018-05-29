import React, {Component}  from 'react'

import Calendar from '../customCalendar/Calendar'

const onSelect = (value) => console.log('select', value.format('YYYY-MM-DD'))

export default class Grid extends Component {
  render(){
    return (
      <section className="calGrid">
        <Calendar {...this.props} />
      </section>
    )//return
  }//render
}//grid
