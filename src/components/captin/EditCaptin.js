import React from 'react'
import plusBlue from '../../assets/icon/plus-blue.svg'
import closeRed from '../../assets/icon/close-red.svg'
import plusGreen from '../../assets/icon/plus-green.svg'
import location from '../../assets/icon/location-blue.svg'

const CaptinEditButton = ({title, icon}) => (
  <div className='transition-shadow rounded-lg shadow-blue-added flex items-center gap-x-4 px-4 py-3 bg-secondary cursor-pointer'>
      <div>
          <img src={icon} alt='icon' />
      </div>
      <p className='truncate'>{title}</p>
  </div>
)

const EditCaptin = () => {
  return (
    <div className='w-full'>
      <p className='title-added'>Captin edit</p>
      <div className='grid grid-cols-2 grid-rows-2 gap-4 shadow-added px-8 py-5 rounded-lg'>
        <div className='col-span-1'>
          <CaptinEditButton title='Add captin' icon={plusBlue} />
        </div>
        <div className='col-span-1'>
          <CaptinEditButton title='Charge' icon={plusGreen} />
        </div>
        <div className='col-span-1'>
          <CaptinEditButton title='Deactive' icon={closeRed} />
        </div>
        <div className='col-span-1'>
          <CaptinEditButton title='Trips' icon={location} />
        </div>
      </div>
    </div>
  )
}

export default EditCaptin
