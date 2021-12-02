import React from 'react'
import Dropdown from '../../shared/ui/Dropdown'

const EditCpatinCar = () => {
  return (
    <div className='w-full '>
      <p className='title-added text-main'>Car edit</p>
      <div className='p-4 grid grid-cols-2 rounded-lg shadow-added'>
        <div className='h-20'>
          <Dropdown name='Car model' />
        </div>
        <Dropdown name='Car model' />
        <Dropdown name='Car model' />
      </div>
    </div>
  )
}

export default EditCpatinCar
