/*
 *  For this sample version, I simply map over the sample conflicts data in the store
 *  For the prod version, we have a set of business rules and whenever an event is added/edited/removed
 *  the new state is reviewed to see if there are any scheduling conflicts
 *  The viewHeight toggle can either be 'conflictsComponent' or 'conflictsComponent closed'
 */

import React from 'react'
import PropTypes from 'prop-types'

const Conflicts = (props) => (
  <div className={props.viewHeight}>
    <ul className='conflictsList'>
      {props.conflicts.map(item => <li key={item.id} className="conflictsListItem">
        <span className="conflictsListLabel">{item.eventDate.getMonth() + '/' + item.eventDate.getDate()} -</span>
        <span className="conflictsListValue">{item.note}</span>
      </li>)}
    </ul>
  </div>
)//Conflict Component

Conflicts.propTypes = {
  viewHeight: PropTypes.string.isRequired,
  conflicts: PropTypes.array.isRequired
}//proptypes

export default Conflicts