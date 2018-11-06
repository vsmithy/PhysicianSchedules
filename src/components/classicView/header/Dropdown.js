import React  from 'react'
import { CurrSettingsContext } from '../../../containers/ClassicContainer'
import { generateBase64 } from '../../../data/exportToExcel'

function settingsToggle(toggleChoice, context){
  //toggleModal
  context.updaterFunctions.toggleModal()

  //toggleMenu
  toggleChoice === 'shifts' ? context.updaterFunctions.toggleShiftSettings() : context.updaterFunctions.togglePeopleSettings()
}//shiftSettingsToggle

function Dropdown(props){
  return (
    <CurrSettingsContext.Consumer>
      {context => (
        <div className="dropdown">
          <div type="button" role="button" className="dropbtn">
            <i className="fas fa-bars fa-2x"></i>
            <div className="dropdownContent">
              <button onClick={() => settingsToggle('people', context)}>Edit People</button>
              <button onClick={() => settingsToggle('shifts', context)}>Edit Shifts</button>
              <button onClick={() => generateBase64(context, props)}>Export to Excel</button>
            </div>
          </div>
        </div>
      )}
    </CurrSettingsContext.Consumer>
  )//return
}//header

export default Dropdown