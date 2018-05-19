import React, { Component } from 'react'


//others and such
import ClassicContainer from './ClassicContainer'

// export default class AppContainer extends Component {
//   render() {
//     return (
//       <div className='appContainer'>
//         <ClassicContainer />
//       </div>      
//     )//return
//   }//render
// }//AppContainer

const AppContainer = () => { return <div className='appContainer'><ClassicContainer /></div>}
export default AppContainer