import React, {Component}  from 'react'

export default class Stats extends Component {
  render(){
    const { viewHeight, stats } = this.props
    const defaultStyle = {
      transition: 'height 125ms ease-in-out',
      height: viewHeight, 
    }

    return (
      <section className='stats' style={defaultStyle}>
        <ul>
          {stats.map(item => <li className={viewHeight === 0 ? 'statsListNone' : 'statsList'} key={item.id}>{item.count} - {item.stat}</li>)}
        </ul>
      </section>
    )//return
  }//render
}//Component