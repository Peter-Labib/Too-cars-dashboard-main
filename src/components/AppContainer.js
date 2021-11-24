import React, {useState} from 'react'
import Sidebar from '../shared/component/Sidebar'
import Header from '../shared/component/Header'

const AppContainer = () => {
  const [openSidebar, setopenSidebar]=useState(false)
  console.log('appContainer')

  const sidebarToogle = ()=>{
    setopenSidebar(prev=>!prev)
  }

  return (
    <React.Fragment>
      <Header toggle={sidebarToogle} />
      <div className='mx-auto flex gap-x-4 w-full h-full px-4'>
        <div className={`overflow-hidden shadow-lg w-1/4 transition-all ${openSidebar?'max-w-full':'max-w-0'}`}>
          <Sidebar />
        </div>
        <div className={`w-1/2 shadow-lg transition-all ${openSidebar?'  max-w-min':'max-w-max w-3/4'}`}>
          <div className='w-full h-full'></div>
        </div>
        <div className='col-span-2'></div>
      </div>
    </React.Fragment>
  )
}

export default AppContainer
