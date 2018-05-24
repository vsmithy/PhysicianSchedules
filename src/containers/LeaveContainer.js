import React, {Component}  from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'

//the sub components
import Leave from '../components/leave/Leave'


class LeaveContainer extends Component {
  render(){
    return (
      <Leave {...this.props} />
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
 
 export default connect(mapStateToProps, mapDispatchToProps)(LeaveContainer)



// class ClassicContainer extends Component {
//   render(){
//     return (
//       <body>
//         <Header {...this.props} />
//         <main className='gridStats'>
//           <Grid />
//           <RightMenus {...this.props}/>
//         </main>
//       </body>
//     )//return
//   }//render
// }//Component