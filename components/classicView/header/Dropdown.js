import React  from 'react'

function settingsToggle(toggleChoice, props){
  alert('Show the ' + toggleChoice + ' menu!!!')


  // //change modalContentId: none0
  // props.changeModalContentId('none0')
  // //toggleModal
  // // context.updaterFunctions.toggleModal()
  // props.toggleModal()
  // //show chosen component
  // toggleChoice === 'shifts' ? props.toggleShiftSettingsWindow() : props.togglePeopleSettingsWindow()

}//shiftSettingsToggle

function Dropdown(props){
  return (
    <div className="dropdown">
      <div type="button" role="button" className="dropbtn">
        <i className="fas fa-bars fa-2x"></i>
        <div className="dropdownContent">
          <button onClick={() => settingsToggle('people', props)}>Edit People</button>
          <button onClick={() => settingsToggle('shifts', props)}>Edit Shifts</button>
          <button onClick={() => settingsToggle('excel', props)}>Export to Excel</button>
        </div>
      </div>
    </div>
  )//return
}//header

export default Dropdown

//</div><button onClick={() => this.generateBlob()}>Export to Excel</button>