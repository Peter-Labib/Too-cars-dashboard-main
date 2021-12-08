import React from 'react'
import { strings } from '../../Localization/languages'
import Dropdown from '../../shared/ui/Dropdown'

const EditCpatinCar = () => {
  return (
    <div className='w-full '>
      <p className='title-added text-main'>{strings.CarEdit}</p>
      <div className='p-4 grid grid-cols-2 shadowed-container-added'>
        <div className='h-20'>
          <Dropdown name='Car-model' label={strings.CarModel} />
        </div>
        <Dropdown name='Car-model' label={strings.CarColor} />
        <Dropdown name='Car model' label={strings.ProductionDate} />
      </div>
    </div>
  )
}

export default EditCpatinCar
