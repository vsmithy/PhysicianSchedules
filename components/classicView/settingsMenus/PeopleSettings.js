import React, { Component } from 'react'

import PersonRules from './PersonRules'

class PeopleSettings extends Component {
  constructor(props){
    super(props)

    this.hideSettings = this.hideSettings.bind(this)
    this.jobRoleInput = React.createRef()
    this.newNameInput = React.createRef()
    this.handleRoleChange = this.handleRoleChange.bind(this)
    this.addNewPerson = this.addNewPerson.bind(this)
    this.cancelAddingPerson = this.cancelAddingPerson.bind(this)

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
  }//will mount

  hideSettings(){
    //hides the modal and the settings window
    this.props.toggleModal()

    // context.updaterFunctions.toggleModal()


    this.props.togglePeopleSettingsWindow()
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

  cancelAddingPerson(){
    // this.hideSettings()
    this.setState({ addMode: false })
  }//cancelAddingPerson
  
  submitNewPerson(){
    this.props.addPerson(this.newNameInput.current.value, this.jobRoleInput.current.value)
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
            <div className="managePeopleItem managePeopleName">
              Name: 
              <input className="addNewPersonInput" ref={this.newNameInput} />
            </div>
            <div className="managePeopleItem managePeopleJobRole">Job Role:
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
              <button className="addPeopleSubmitBtn" onClick={() => this.submitNewPerson()}>Submit</button>
              <button className="addPeopleCancelBtn" onClick={() => this.cancelAddingPerson()}>Cancel</button>
            </div>
          </div>
        </div>
      )//return
    }
    else{
      return (
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
            <PersonRules />
            <button className="addPeopleCloseBtn" onClick={() => this.hideSettings()}>Close</button>
          </div>
        </div>
      )//return
    }//else
  }//render
}//PeopleSettings

export default PeopleSettings



// constructor(props){
//   super(props)

//   this.shiftInput = React.createRef()
//   this.makeNewShift = this.makeNewShift.bind(this)
//   this.hideSettings = this.hideSettings.bind(this)
// }

// makeNewShift(){
//   //add the shift
//   this.props.addShift(this.shiftInput.current.value)

//   //clear out the input box
//   this.shiftInput.current.value = ''
// }

// hideSettings(){
//   //hides the modal and the settings window
//   this.props.toggleModal()
//   this.props.togglePeopleSettingsWindow()
// }

// render() {
//   return (
//     <div className={this.props.viewChoice}>
//       <h1>Edit People</h1>
//       <div className="editShiftInputArea">
//         <input 
//           type="text" 
//           name="shiftInput" 
//           placeholder="add shift type"
//           ref={this.shiftInput}
//         />
//         <button role="button" onClick={() => this.makeNewShift()}>Add</button>
//       </div>
//       {this.props.shifts.map(shiftItem => <div key={shiftItem.id} className="editShiftListItem">{shiftItem.shiftName}<i className="fas fa-times exitIcon" onClick={() => this.props.removeShift(shiftItem.id)}></i></div>)}
//       <button onClick={() => this.hideSettings()}>Close</button>
//     </div>
//   )
// }//render
// }//PeopleSettings