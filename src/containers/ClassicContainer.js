import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'

//the sub components
import Grid from '../components/classicView/Grid'
import Header from '../components/classicView/Header'
import RightMenus from '../components/classicView/RightMenus'


class ClassicContainer extends Component {

  /*********************************************************/
  //lifecycleMethods
  //mounting
  //static getDerivedStateFromProps(nextProps, prevState)
  // componentDidMount(){console.log('classic container did mount')}

  //updating
  //static getDerivedStateFromProps(nextProps, prevState)
  //shouldComponentUpdate(nextProps, nextState)
  //getSnapshotBeforeUpdate(prevProps, prevState)
  // componentDidUpdate(prevProps, prevState, snapshot){console.log('classic container did update')}

  //unmounting
  // componentWillUnmount(){console.log('classic container will unmount')}

  //errorHandling
  // componentDidCatch(error, info){'classic container caught an error'}
  /*******************************************************************/

  render(){
    return (
      <div>
        <Header {...this.props} />
        <main>
          <Grid {...this.props} />
          <RightMenus {...this.props}/>
        </main>
      </div>
    )//return
  }//render
}//Component

const mapStateToProps = state => ({
  currentViewProperties: state.currentViewProperties,
  shifts: state.shifts,
  conflicts: state.conflicts,
  stats: state.stats,
  eventsReducer: state.eventsReducer,
 })
 
 const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch))
 
 export default connect(mapStateToProps, mapDispatchToProps)(ClassicContainer)