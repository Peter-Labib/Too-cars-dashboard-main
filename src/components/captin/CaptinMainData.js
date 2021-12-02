import React from 'react'
import CaptinEdit from './CaptinEdit'
import CaptinStatus from './CaptinStatus'
import EditCpatinCar from './EditCpatinCar'
import Input from '../../shared/ui/Input'
import Dropdown from '../../shared/ui/Dropdown'
import Radio from '../../shared/ui/Radio'
import ImagePicker from '../../shared/ui/ImgPicker'
import avatar from '../../assets/img/avatar.png'

const CaptinMainData = () => {
  return (
    <div className='flex gap-x-4'>
      <div className='flex flex-col gap-y-4 lg:gap-y-6'>
        <div className=''>
          <p className='title-added'>Captin profile</p>
          <form className='grid grid-cols-4 gap-2 shadow-added p-2 rounded-lg'>
            <div className='mx-auto border-2 col-span-4 md:col-span-2 lg:col-span-1 self-center h-auto border-blue-400 w-16 overflow-hidden rounded-full'>
              <img className='object-cover w-full' src={avatar} alt='avatar' />
            </div>
            <div className='captin-main-data-col-added'>
              <Input label='Name' type='text' dir='auto' />
            </div>
            <div className='captin-main-data-col-added'>
              <Input label='City' type='text' dir='auto' />
            </div>
            <div className='captin-main-data-col-added'>
              <Input label='Address' type='text' dir='auto' />
            </div>
            <div className='captin-main-data-col-added'>
              <Input label='Mobile' type='tel' />
            </div>
            <div className='captin-main-data-col-added'>
              <Input label='Email' type='email' />
            </div>
            <div className='captin-main-data-col-added'>
              <Input label='Password' type='password' />
            </div>
            <div className='captin-main-data-col-added'>
              <Input label='Password' type='password' />
            </div>
            <div className='captin-main-data-col-added'>
              <Input label='Nationality' type='text' />
            </div>
            <div className='captin-main-data-col-added'>
              <Dropdown name='Agency' options={[1, 2, 3, 4]} />
            </div>
            <div className='captin-main-data-col-added'>
              <Dropdown name='Commission' options={[1, 2, 3, 4]} />
            </div>
            <div className='captin-main-data-col-added'>
              <Input label='Captin invitation code' />
            </div>
            <div className='captin-main-data-col-added'>
              <Input label='Passenger invitation code' />
            </div>
            <div className='captin-main-data-col-added'>
              <Input label='Bonus' />
            </div>
          </form>
        </div>
        <div className='flex items-center justify-evenly flex-col md:flex-row place-items-center shadow-added rounded-lg py-2'>
          <Radio title='city to city' />
          <Radio title='phone activated' />
          <Radio title='gender' />
        </div>
        <div className='flex justify-evenly gap-x-8 px-12 py-6 shadow-added rounded-lg'>
          <Input label='Bank Name' />
          <Input label='Bank Account' />
        </div>
        <div>
          <p className='title-added'>Captin pic</p>
          <div className='grid grid-cols-2 gap-x-4 rounded-lg shadow-added px-2 py-4'>
            <ImagePicker label='choose pic' />
            <ImagePicker label='choose pic' />
            <ImagePicker label='choose pic' />
            <ImagePicker label='choose pic' />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-4 lg:gap-y-6'>
        <div>
          <CaptinEdit />
        </div>
        <div>
          <CaptinStatus />
        </div>
        <div>
          <EditCpatinCar />
        </div>
      </div>
    </div>
  )
}

export default React.memo(CaptinMainData)
