import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { changeLanguage } from './Localization/languages'
import AppContainer from './components/AppContainer'
import Login from './components/views/Login'

class App extends React.Component {
  componentWillMount() {
    changeLanguage()
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <AppContainer />
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
