import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({ name, options = [], onChange }) => {
  const [val, setVal] = useState('')

  const dropdownOnClickHandler = (e) => {
    const value = e.target.value
    setVal(value)
    // onChange(value)
  }

  return (
    <div className='input-container-main-data-added w-full h-full self-stretch'>
      <label>{name}</label>
      <div className='relative h-full'>
        <select
          className='w-full h-full outline-none'
          onChange={dropdownOnClickHandler}
        >
          {options.map((option, i) => (
            <option key={option + i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className='absolute pointer-events-none inset-0 bg-white'></div>
        <div className='absolute inset-0 pointer-events-none p-2 flex items-center justify-between bg-secondary rounded-md z-10'>
          <span>{val}</span>
          <FontAwesomeIcon icon={faChevronDown} className='text-main' />
        </div>
      </div>
    </div>
  )
}

export default Dropdown
