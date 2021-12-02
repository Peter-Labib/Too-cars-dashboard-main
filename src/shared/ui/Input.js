import React, { useState } from 'react'

const Input = ({ label, ...atr }) => {
  const [value, setValue] = useState('')

  const inputValueHandler = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='input-container-main-data-added'>
      <label className='truncate'>{label}</label>
      <input
        className='p-2 transition bg-secondary text-gray-500 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-opacity-50 '
        value={value}
        onChange={inputValueHandler}
        {...atr}
      />
    </div>
  )
}

export default Input
