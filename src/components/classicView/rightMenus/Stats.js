/*
 *  For this sample version, I simply map over the sample stats data in the store because
 *  the actual metrics are based on business logic which is private.
 *  The production version of this component computes some basic stats on the fly based on the events data.
 *  Also, the viewHeight toggle can either be 'statsComponent' or 'statsComponent closed'
 */

import React from 'react'
import PropTypes from 'prop-types'

const Stats = (props) => (
  <div className={props.viewHeight}>
    <ul className="statsList">
      {props.stats.map(statItem => <li key={statItem.id} className="statsListItem"><span>{statItem.stat}:</span><span className='statValue'>{statItem.count}</span></li>)}
    </ul>
  </div>
)//Stats Component

Stats.propTypes = {
  stats: PropTypes.array.isRequired,
  viewHeight: PropTypes.string.isRequired
}//propTypes

export default Stats