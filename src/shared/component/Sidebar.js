import React, { useState } from 'react'
import homeIcon from '../../assets/icon/home.svg'
import countriesIcon from '../../assets/icon/countries.svg'
import calcIcon from '../../assets/icon/calc.svg'
import dropdownIcon from '../../assets/icon/dropdown.svg'

const Dropdown = ({ icon, name, children = ['first', 'second'] }) => {
  const [open, setOpen] = useState(false)

console.log('dropdown')

  const dropDownToogle = () => {
    setOpen((prev) => !prev)
  }
  
  return (
    <div>
      <div
        className='flex items-center px-4 py-2 group hover:bg-main hover:bg-opacity-50 transition cursor-pointer w-full'
        onClick={dropDownToogle}
      >
        <div>
          <img
            className='filter group-hover:drop-shadow-lg transition'
            src={icon}
            alt='countries'
          />
        </div>
        <div className='px-2 flex-grow'>{name}</div>
        <div className={`relative justify-self-end `}>
          <img
            className='filter group-hover:drop-shadow-lg transition'
            src={dropdownIcon}
            alt='dropdown'
          />
          <img
            className={`absolute inset-0 transition ${open?'transform rotate-180':''}`}
            src={dropdownIcon}
            alt='dropdown'
          />
        </div>
      </div>
      <div className={`transition-all ${open?'max-h-40':'max-h-0'} overflow-hidden`}>
        {children.map((child) => (
          <div key={child} className='px-16 py-2 hover:bg-blue-400 hover:bg-opacity-50 cursor-pointer'>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

const Sidebar = React.memo(() => {
    console.log('sidebar')
  return (
    <div className='divide-y divide-gray-100 flex-grow'>
      <div className='flex w-full bg-gray-200 rounded-t-lg text-black px-4 py-2 items-center'>
        <div>
          <img src={homeIcon} alt='home' />
        </div>
        <div className='px-2'>Home</div>
      </div>
      <Dropdown icon={countriesIcon} name='Countries' />
      <Dropdown icon={calcIcon} name='Calculation' />
      <Dropdown icon={countriesIcon} name='Countries' />
      <Dropdown icon={calcIcon} name='Calculation' />
    </div>
  )
})

export default Sidebar
