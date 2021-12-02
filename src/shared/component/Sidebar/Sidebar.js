import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import links from '../../../routes/links'
import SidebarItem from './SidebarItem'
import homeIcon from '../../../assets/icon/home.svg'

const Dropdown = ({ linkData }) => {
  const { name, icon, children } = linkData
  const [open, setOpen] = useState(false)

  const dropDownToogle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div>
      {/* rtl modification */}
      <div
        className=' px-4 py-3 group nav-item--apply w-full'
        onClick={dropDownToogle}
      >
        <div>
          <FontAwesomeIcon
            className={`transition  group-hover:text-white group-hover:drop-shadow-lg`}
            icon={icon}
          />
        </div>
        {/* rtl modification */}
        <p className='pl-3 pr-7 flex-grow group-hover:text-white whitespace-nowrap truncate'>
          {name}
        </p>
        <div
          className={`justify-self-end transition group-hover:bg-main rounded-full`}
        >
          <FontAwesomeIcon
            className={`transition transform ${
              open ? 'rotate-180' : ''
            }  group-hover:text-white group-hover:drop-shadow-lg `}
            icon={faChevronCircleDown}
          />
        </div>
      </div>
      <div
        className={`transition-all ${
          open ? 'max-h-40' : 'max-h-0'
        } overflow-hidden`}
      >
        {children.map((child) => (
          <div
            key={child}
            className='flex items-center px-12 py-2 hover:bg-main hover:text-white hover:shadow-inner cursor-pointer'
          >
            <div>
              <FontAwesomeIcon icon={child.icon} />
            </div>
            <div className='px-4'>{child.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Sidebar = React.memo(() => {
  return (
    <div className='flex-grow text-main'>
      <Link to='' className='flex bg-gray-100  text-black px-4 py-2 items-center'>
        <div>
          <img src={homeIcon} alt='home' />
        </div>
        <div className='px-2'>Home</div>
      </Link>
      <div className='py-3'>
        {links.map((link, i) =>
          link.children.length > 0 ? (
            <Dropdown key={link.name} linkData={link} />
          ) : (
            <SidebarItem key={link.name} linkData={link} />
          )
        )}
      </div>
    </div>
  )
})

export default Sidebar
