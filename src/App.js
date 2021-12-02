import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppContainer from './components/AppContainer'
import Login from './components/views/Login'

function App() {
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

export default App
