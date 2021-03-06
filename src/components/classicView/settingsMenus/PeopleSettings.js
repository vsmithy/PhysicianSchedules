import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CurrSettingsContext } from '../../../containers/ClassicContainer'

class PeopleSettings extends Component {
  constructor(props){
    super(props)

    this.hideSettings = this.hideSettings.bind(this)
    this.jobRoleInput = React.createRef()
    this.newNameInput = React.createRef()
    this.managePeopleForm = React.createRef()
    this.handleRoleChange = this.handleRoleChange.bind(this)
    this.addNewPerson = this.addNewPerson.bind(this)

    this.state = {
      chosenPerson: "i am the chosen",
      chosenPersonId: 1,
      chosenPersonRole: "Full Scope",
      addMode: false,
    }//state
  }//constructor

  componentWillMount(){
    //initial state has first person sorted by name
    this.setState({ 
      chosenPerson: [...this.props.people].sort( (a, b) => a.name < b.name ? -1 : 1 )[0].name,
      chosenPersonId: [...this.props.people].sort( (a, b) => a.name < b.name ? -1 : 1 )[0].id,
      chosenPersonRole: [...this.props.people].sort( (a, b) => a.name < b.name ? -1 : 1 )[0].jobRole,
    })
  }//componentWillMount

  hideSettings(context){
    //toggleModal
    context.updaterFunctions.toggleModal()
  
    //toggleMenu
    context.updaterFunctions.togglePeopleSettings()
  }//hideSettings

  personClicked(theID){
    const myGuy = this.props.people.filter(person => person.id === theID)
    this.setState({ chosenPerson: myGuy[0].name })
    this.setState({ chosenPersonId: myGuy[0].id })
    this.setState({ chosenPersonRole: myGuy[0].jobRole })
  }//personClicked
  
  handleRoleChange(){
    //update person's data with new value
    //get next value
    //if different, do the update
    //get the person's ID
    this.setState({ chosenPersonRole: this.jobRoleInput.current.value })
    this.props.changeRole(this.state.chosenPersonId, this.jobRoleInput.current.value)
  }//handleRoleChange

  addNewPerson(){
    this.setState({ addMode: true })
  }//addNewPerson

  submitNewPerson(evt){
    evt.preventDefault()

    this.props.addPerson(this.newNameInput.current.value, this.jobRoleInput.current.value)
    this.newNameInput.current.value = ''
    this.setState({ addMode: false })
  }//submitNewPerson
  
  render() {
    const { people } = this.props
    const sortedPeople = [...people]
    sortedPeople.sort( (a, b) => a.name < b.name ? -1 : 1 )
    const activePersonYes = this.props.people.filter(person => person.id === this.state.chosenPersonId)[0].isActive === true ? "active yes" : "yes"
    const activePersonNo = this.props.people.filter(person => person.id === this.state.chosenPersonId)[0].isActive === false ? "active no" : "no"
    
    if(this.state.addMode === true){
      return (
        <div className={this.props.viewChoice}>
          <div className="peopleLeft">
            {sortedPeople.map(item => <div key={item.id} className="personTab">{item.name}</div>)}
            <button disabled onClick={() => console.log('I would add a person')} className="addNewPersonBtn disabled">Add New</button>
          </div>
          <div className="peopleRight">
            <h1>Add A Person</h1>
            <form ref={this.managePeopleForm} className="managePeopleForm" onSubmit={(e) => this.submitNewPerson(e)}>
              <div className="managePeopleItem managePeopleName">
                <label>Name: </label>
                <input className="addNewPersonInput" ref={this.newNameInput} />
              </div>
              <div className="managePeopleItem managePeopleJobRole">
                <label>Job Role:</label>
                <select 
                name="jobRoleChooser" 
                id="jobRoleChooser" 
                className="jobRoleChooser" 
                ref={this.jobRoleInput}
                >
                  <option value="Full Scope">Full Scope</option>
                  <option value="Part Time">Part Time</option>
                  <option value="GYN">GYN</option>
                  <option value="MFM">MFM</option>
                </select>
              </div>
              <div className="addPeopleChoiceBtns" >
                <button className="addPeopleSubmitBtn" onClick={(e) => this.submitNewPerson(e)}>Submit</button>
                <button className="addPeopleCancelBtn" onClick={() => this.setState({ addMode: false })}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )//return
    }
    else{
      return (
        <CurrSettingsContext.Consumer>
          {context => (
            <div className={this.props.viewChoice}>
              <div className="peopleLeft">
                {sortedPeople.map(item => <div key={item.id} className={this.state.chosenPerson === item.name ? "personTab active" : "personTab"} onClick={() => this.personClicked(item.id)} >{item.name}</div>)}
                <button onClick={() => this.addNewPerson()} className="addNewPersonBtn">Add New</button>
              </div>
              <div className="peopleRight">
                <h1>Manage People</h1>
                <div className="managePeopleItem managePeopleName">Name: {this.state.chosenPerson}</div>
                <div className="managePeopleItem managePeopleId">ID: {this.state.chosenPersonId}</div>
                <div className="managePeopleItem managePeopleIsactive">Is Active:
                  <span className="personToggleButtons">
                    <button className={activePersonYes} onClick={() => this.props.activatePerson(this.state.chosenPersonId) }>Yes</button>
                    <button className={activePersonNo} onClick={() => this.props.deactivatePerson(this.state.chosenPersonId) }>No</button>
                  </span>
                </div>
                <div className="managePeopleItem managePeopleJobRole">Job Role:
                  <select 
                  name="jobRoleChooser" 
                  id="jobRoleChooser" 
                  className="jobRoleChooser" 
                  ref={this.jobRoleInput}
                  onChange={() => this.handleRoleChange()}
                  value={this.state.chosenPersonRole}
                  >
                    <option value="Full Scope">Full Scope</option>
                    <option value="Part Time">Part Time</option>
                    <option value="GYN">GYN</option>
                    <option value="MFM">MFM</option>
                  </select>
                </div>
                <button className="addPeopleCloseBtn" onClick={() => this.hideSettings(context)}>Close</button>
              </div>
            </div>
          )}
        </CurrSettingsContext.Consumer>
      )//return
    }//else
  }//render
}//PeopleSettings

PeopleSettings.propTypes = {
  viewChoice: PropTypes.string.isRequired,
  people: PropTypes.array.isRequired,
  activatePerson: PropTypes.func,
  deactivatePerson: PropTypes.func,
  addPerson: PropTypes.func,
  changeRole: PropTypes.func
}//propTypes

export default PeopleSettings