import React, {Component}  from 'react'

export default class Stats extends Component {
  render(){
    const { viewHeight, stats } = this.props

return (
      <div role="presentation" className={viewHeight}>
        Voluptate elit magna eu esse occaecat. Duis fugiat aute incididunt sit sunt id occaecat magna proident veniam ipsum nulla amet deserunt. Ullamco veniam occaecat dolore dolor in nostrud ullamco et ullamco pariatur. Adipisicing laborum non cillum et labore elit et do in. Nulla elit do ullamco aliqua reprehenderit ea sint. Veniam et ex eu in labore et tempor qui esse enim dolor proident.
      </div>
    )//return
  }//render
}//Component




    // render(){
    //   const { viewHeight, stats } = this.props
    //   const defaultStyle = {
    //     transition: 'height 125ms ease-in-out',
    //     height: viewHeight, 
    //   }
  
    //   return (
    //     <div role="presentation" className='statsComponent' style={defaultStyle}>
    //       <ul>
    //         {stats.map(item => <li className={viewHeight === 0 ? 'statsListNone' : 'statsList'} key={item.id}>{item.count} - {item.stat}</li>)}
    //       </ul>
    //     </div>
    //   )//return
    // }//render