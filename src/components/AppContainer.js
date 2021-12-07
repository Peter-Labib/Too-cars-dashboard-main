import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from '../shared/component/Sidebar/Sidebar'
import Header from '../shared/component/Header'
import EditCaptinMainData from './captin/EditCaptinMainData'
import Home from './views/Home'

const AppContainer = () => {
  const [openSidebar, setopenSidebar] = useState(true)
  console.log('appContainer')

  const sidebarToogle = () => {
    setopenSidebar((prev) => !prev)
  }

  return (
    <React.Fragment>
      <Header toggle={sidebarToogle} />
      <div className='mx-auto flex lg:gap-x-4 w-full h-full px-4'>
        <div
          className={`hidden lg:block overflow-hidden rounded-lg shadow-added transition-all duration-300 ${
            openSidebar ? 'max-w-full min-w-2xs--extended' : 'max-w-0 min-w-0'
          }`}
        >
          <Sidebar />
        </div>
        <div
          className={`flex transition-all mx-auto self-start ${
            ''
            // openSidebar ? '  max-w-min' : 'max-w-max w-3/4'
            // openSidebar ? '  max-w-min' : 'max-w-max w-3/4'
          }`}
        >
          <Switch>
            <Route path='/captin'>
              <EditCaptinMainData />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AppContainer
