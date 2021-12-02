import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/img/too-logo-1.png'
import icon from '../../assets/img/icon.png'

const Header = ({ avatar = icon, toggle }) => {

  return (
    <header className='h-16 flex px-4 lg:px-8 bg-main text-white items-center overflow-hidden mb-4'>
      <Link to='/' className='lg:mx-4 max-h-full text-center'>
        <div className='w-2/6 mx-auto'>
          <img className='object-cover w-full' src={logo} alt='logo' />
        </div>
        <p className=''>Dashboard</p>
      </Link>
      <button className='p-1 mx-1' onClick={toggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className='hidden lg:block gab-x-2 divide-x-2 divide-white'>
        <span className='px-2'>Home</span>
        <span className='px-2'>Control</span>
      </div>
      <div className='flex-grow'></div>
      <div className='flex gap-x-2 items-center'>
        <div className='rounded-full w-10 overflow-hidden'>
          <img className='object-cover w-full' src={avatar} alt='avatar' />
        </div>
        <div className='hidden lg:block'>
          <p className='text-sm'>peter labib</p>
          <p className='text-2xs'>peter.adel.labib@gmail.com</p>
        </div>
      </div>
    </header>
  )
}

export default Header
