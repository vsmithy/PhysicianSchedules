import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

//local files and imports
import registerServiceWorker from './registerServiceWorker'
import AppContainer from './containers/AppContainer'
import store from './store'

class App extends React.Component {
  render (){
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )//return
  }//render
}//App component

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()