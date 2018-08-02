import React, { Component } from 'react'

class PeopleSettings extends Component {
  constructor(props){
    super(props)

    // this.shiftInput = React.createRef()
    // this.makeNewShift = this.makeNewShift.bind(this)
    this.hideSettings = this.hideSettings.bind(this)
  }

  // makeNewShift(){
  //   //add the shift
  //   this.props.addShift(this.shiftInput.current.value)

  //   //clear out the input box
  //   this.shiftInput.current.value = ''
  // }
  
  hideSettings(){
    //hides the modal and the settings window
    this.props.toggleModal()
    this.props.togglePeopleSettingsWindow()
  }//hideSettings
  
  render() {
    return (
      <div className={this.props.viewChoice}>
        <div className="peopleLeft">
          {this.props.people.map(item => <div key={item.id} className="personTab">{item.name}</div>)}
        </div>
        <div className="peopleRight">
          <h1>Edit People</h1>
          <button onClick={() => console.log('I would add a person')} className="addNewPersonBtn">Add</button>
          <div>Name:</div>
          <div>ID:</div>
          <div>Is Active:
            <span className="personToggleButtons">
              <button>Yes</button>
              <button>No</button>
            </span>
          </div>
          <div>Job Role:
            <select name="jobRoleChooser" id="jobRoleChooser">
              <option value="item1">item1</option>
              <option value="item2">item2</option>
              <option value="item3">item3</option>
            </select>
          </div>
          <div>Rules:
            <div className="ruleItem">
              <p>I am the rule text</p>
              <button>edit</button>
              <button>delete</button>
            </div>
            <div className="ruleItem">
              <p>I am the rule text</p>
              <button>edit</button>
              <button>delete</button>
            </div>
            <input /><button>new Rule</button>
          </div>
          <button className="addPeopleCloseBtn" onClick={() => this.hideSettings()}>Close</button>
        </div>
      </div>
    )
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