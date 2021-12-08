import React from 'react'
import {strings} from '../../Localization/languages' 
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

const EditCaptinRouteBox = () => {
  return (
    <div className='w-full'>
      <p className='title-added'>{strings.EditCaptin}</p>
      <div className='grid grid-cols-2 grid-rows-2 gap-4 shadowed-container-added p-4'>
        <div className='col-span-1'>
          <CaptinEditButton title={strings.AddCaptin} icon={plusBlue} />
        </div>
        <div className='col-span-1'>
          <CaptinEditButton title={strings.AddBalance} icon={plusGreen} />
        </div>
        <div className='col-span-1'>
          <CaptinEditButton title={strings.Deactivate} icon={closeRed} />
        </div>
        <div className='col-span-1'>
          <CaptinEditButton title={strings.Trips} icon={location} />
        </div>
      </div>
    </div>
  )
}

export default EditCaptinRouteBox
