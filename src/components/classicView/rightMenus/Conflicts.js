/*
 *  For this sample version, I simply map over the sample conflicts data in the store
 *  For the prod version, we have a set of business rules and whenever an event is added/edited/removed
 *  the new state is reviewed to see if there are any scheduling conflicts
 *  The viewHeight toggle can either be 'conflictsComponent' or 'conflictsComponent closed'
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

//local files and data
import { conflictsData } from '../../../data/sampleData'

class Conflicts extends Component {
  constructor(props){
    super(props)

    this.state = {
      conflicts: []
    }//state
  }//constructor

  componentDidMount(){
    this.setState({ conflicts: conflictsData })
  }//componentDidMount

  render(){
    return(
      <div className={this.props.viewHeight}>
        <ul className='conflictsList'>
          {this.state.conflicts.map(item => <li key={item.id} className="conflictsListItem">
            <span className="conflictsListLabel">{item.eventDate.getMonth() + '/' + item.eventDate.getDate()} -</span>
            <span className="conflictsListValue">{item.note}</span>
          </li>)}
        </ul>
      </div>
    )//return
  }//render
}//Conflict Component

Conflicts.propTypes = {
  viewHeight: PropTypes.string.isRequired,
  conflicts: PropTypes.array.isRequired
}//proptypes

export default Conflicts