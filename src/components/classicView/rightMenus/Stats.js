/*
 *  For this sample version, I simply map over the sample stats data in the store because
 *  the actual metrics are based on business logic which is private.
 *  The production version of this component computes some basic stats on the fly based on the events data.
 *  Also, the viewHeight toggle can either be 'statsComponent' or 'statsComponent closed'
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

//local files and data
import { statsData } from '../../../data/sampleData'

class Stats extends Component {
  constructor(props){
    super(props)

    this.state = {
      stats: []
    }//state
  }//constructor
  
  componentDidMount(){
    this.setState({ stats: statsData })
  }//componentDidMount
  
  render(){
    return (
      <div className={this.props.viewHeight}>
        <ul className="statsList">
          {this.state.stats.map(statItem => <li key={statItem.id} className="statsListItem"><span>{statItem.stat}:</span><span className='statValue'>{statItem.count}</span></li>)}
        </ul>
      </div>
    )
  }//render
}//Stats Component

Stats.propTypes = {
  stats: PropTypes.array.isRequired,
  viewHeight: PropTypes.string.isRequired
}//propTypes

export default Stats