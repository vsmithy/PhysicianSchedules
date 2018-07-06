import React, {Component}  from 'react'

export default class ShiftSelect extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeShift: this.props.currentViewProperties.shiftSelect,
    }
  }//constructor

  /*********************************************************/
  //lifecycleMethods
  //mounting
  //static getDerivedStateFromProps(nextProps, prevState)
  // componentDidMount(){console.log('shiftSelect component did mount')}

  // //updating
  // //static getDerivedStateFromProps(nextProps, prevState)
  // //shouldComponentUpdate(nextProps, nextState)
  // //getSnapshotBeforeUpdate(prevProps, prevState)
  // componentDidUpdate(prevProps, prevState, snapshot){console.log('shiftSelect component did update')}

  // //unmounting
  // componentWillUnmount(){console.log('shiftSelect component will unmount')}

  // //errorHandling
  // componentDidCatch(error, info){'shiftSelect component caught an error'}
  /*******************************************************************/

  //change the shift that is used for event modification
  handleShiftChange(selected){
    this.props.changeSelectedShft(selected)
    this.setState({ activeShift: selected })
  }//handle shift change

  render(){
    const { viewHeight, shifts } = this.props

    return (
      <div role="presentation" className={viewHeight}>
        <ul role="listbox">
          {
            shifts.map(shift => <li key={shift.id}><button type="button" className={this.state.activeShift === shift.shiftName ? 'shiftBtn active' : 'shiftBtn'} onClick={() => this.handleShiftChange(shift.shiftName)}>{shift.shiftName}</button></li>)
          }
        </ul>
      </div>
    )//return
  }//render
}//Component