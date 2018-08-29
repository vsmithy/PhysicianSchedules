/*
 *  For this sample version, I simply map over the sample conflicts data in the store
 *  For the prod version, we have a set of business rules and whenever an event is added/edited/removed
 *  the new state is reviewed to see if there are any scheduling conflicts
 *  The viewHeight toggle can either be 'conflictsComponent' or 'conflictsComponent closed'
 */

import React, {Component}  from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//local files and components
import * as actionCreators from '../../../actions'

class Conflicts extends Component {
  render(){
    const { viewHeight, conflicts } = this.props

    return (
      <div className={viewHeight}>
        <ul className='conflictsList'>
          {conflicts.map(item => <li key={item.id} className="conflictsListItem">
            <span className="conflictsListLabel">{item.eventDate.getMonth() + '/' + item.eventDate.getDate()} -</span>
            <span className="conflictsListValue">{item.note}</span>
          </li>)}
        </ul>
      </div>
    )//return
  }//render
}//Component

//now to specify the areas of state to connect to
const mapStateToProps = state => ({
  conflicts: state.conflicts, 
 })//mapStateToProps
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(Conflicts)