import React, { Component } from 'react'


//others and such
import ClassicContainer from './ClassicContainer'
import LeaveContainer from './LeaveContainer'

// export default class AppContainer extends Component {
//   render() {
//     return (
//       <div className='appContainer'>
//         <ClassicContainer />
//       </div>      
//     )//return
//   }//render
// }//AppContainer

const AppContainer = () => { return <div className='appContainer'><LeaveContainer /></div>}
export default AppContainer