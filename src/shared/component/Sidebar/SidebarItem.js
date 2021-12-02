import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SidebarItem = ({linkData}) => {
    const { name, icon } = linkData
    console.log('sidebarItem')
  return (
    <div className='nav-item--apply px-4 py-3 hover:text-white'>
      <FontAwesomeIcon className='transition' icon={icon} />
      <p className='px-3 flex-grow whitespace-nowrap transition'>{name}</p>
    </div>
  )
}

export default SidebarItem
