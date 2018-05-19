/*

  This component returns year selector and the little month circles at the top of the app. Months older
  than the current month will be grey, the rest of the year will be white.

  The actively selected month will be red.

*/


import React, {Component}  from 'react'

export default class ClassicNavCal extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeMonthSelection: this.props.currentViewProperties.monthSelect
    }
  }

  /*********************************************************
  //lifecycleMethods
  //mounting
  //static getDerivedStateFromProps(nextProps, prevState)
  componentDidMount(){console.log('component did mount')}

  //updating
  //static getDerivedStateFromProps(nextProps, prevState)
  //shouldComponentUpdate(nextProps, nextState)
  //getSnapshotBeforeUpdate(prevProps, prevState)
  componentDidUpdate(prevProps, prevState, snapshot){console.log('component did update')}

  //unmounting
  componentWillUnmount(){console.log('component will unmount')}

  //errorHandling
  componentDidCatch(error, info){'component caught an error'}
  *******************************************************************/

  updateMonth(idx){
    this.props.changeMonth(idx)
    this.setState({activeMonthSelection: idx})
  }

  render(){
    const { currentViewProperties } = this.props
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const whichClass = (idx) => currentViewProperties.currentMonth > idx ? 'calCircleColorPast' : 'calCircleColor'

    return (
      <div className='classicNavCal'>
        <div className='calMonthFlex'>
          <span className='calNavYear'>
            <button onClick={() => this.props.changeYear(-1)}><i className="fas fa-chevron-left"></i></button>
            {this.props.currentViewProperties.yearSelect}
            <button onClick={() => this.props.changeYear(1)}><i className="fas fa-chevron-right"></i></button>
          </span>
          <ul className='calNavMonth'>
            {
              months.map((month, i) => (
                  <li key={i}>
                    <a className={this.state.activeMonthSelection === i ? 'calCircleColorActive' : whichClass(i)} onClick={() => this.updateMonth(i)}>{month[0]}</a>
                  </li>
                )
              )//map
            }
          </ul>
        </div>
      </div>
    )//return
  }//render
}//ClassicNavCal