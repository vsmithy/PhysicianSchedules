/*
 *  This component computes some basic stats on the fly based on the events data
 *  The actual metrics are based on business logic which is private, so for this sample
 *  version, I simply map over the sample stats data in the store.
 *  The viewHeight toggle can either be 'statsComponent' or 'statsComponent closed'
 */

import React, {Component}  from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//local files and components
import * as actionCreators from '../../../actions'

class Stats extends Component {
  render(){
    const { viewHeight, stats } = this.props

    return (
      <div className={viewHeight}>
        <ul className="statsList">
          {stats.map(statItem => <li key={statItem.id} className="statsListItem"><span>{statItem.stat}:</span><span className='statValue'>{statItem.count}</span></li>)}
        </ul>
      </div>
    )//return
  }//render
}//Component

//now to specify the areas of state to connect to
const mapStateToProps = state => ({
  stats: state.stats, 
 })//mapStateToProps
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(Stats)