import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//local files and imports
import GridCtx from '../components/classicView/grid/Grid'
import Header from '../components/classicView/header/Header'
import RightMenus from '../components/classicView/rightMenus/RightMenus'
import * as actionCreators from '../actions'

//create the context for downstream items
export const CurrSettingsContext = React.createContext()

class ClassicContainer extends Component {
  constructor(props){
    super(props)

    const d = new Date()
    this.updaterFunctions = {
      updateYear: (diff) => (this.setState({ yearSelect: this.state.yearSelect+diff })),
      updateMonth: (mo) => (this.setState({ monthSelect: mo })),
      changeShift: (shift) => (this.setState({ shiftSelect: shift })),
      toggleModal: () => (this.setState({ modal: !this.state.modal })),
      togglePeopleSettings: () => (this.setState({ peopleSettingsWindow: !this.state.peopleSettingsWindow })),
      toggleShiftSettings: () => (this.setState({ shiftSettingsWindow: !this.state.shiftSettingsWindow })),
    }//updaterFunctinos

    this.state = {
      yearSelect: d.getFullYear(),
      currentMonth: d.getMonth(),
      monthSelect: d.getMonth(),
      viewSelect: 'classicView',
      shiftSelect: '',
      maxEventId: 103,
      modal: false,
      modalId: "none0",
      shiftSettingsWindow: false,
      peopleSettingsWindow: false,
      updaterFunctions: this.updaterFunctions
    }//state
  }//constructor

  render(){
    return (
        <CurrSettingsContext.Provider value={this.state}>
          <Header people={this.props.people} meetings={this.props.meetings} eventsReducer={this.props.eventsReducer} />
          <main>
            <GridCtx  {...this.props} />
            <RightMenus {...this.props} />
          </main>
        </CurrSettingsContext.Provider>
    )//return
  }//render
}//ClassicContainer Component
 
//  now to specify the areas of state to connect to
const mapStateToProps = state => ({
    stats: state.stats,
    conflicts: state.conflicts,
    shifts: state.shifts,
    notes: state.notes,
    meetings: state.meetings,
    people: state.people,
    eventsReducer: state.eventsReducer,
 })
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(ClassicContainer)