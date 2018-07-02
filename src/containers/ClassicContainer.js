import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'

//the sub components
import Grid from '../components/classicView/Grid'
import Header from '../components/classicView/Header'
import RightMenus from '../components/classicView/RightMenus'


class ClassicContainer extends Component {
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
 })
 
 const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch))
 
 export default connect(mapStateToProps, mapDispatchToProps)(ClassicContainer)