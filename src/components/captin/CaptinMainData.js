import React from 'react'
import CaptinEdit from './CaptinEdit'
import CaptinStatus from './CaptinStatus'
import Input from '../../shared/ui/Input'
import Dropdown from '../../shared/ui/Dropdown'
import Radio from '../../shared/ui/Radio'
import avatar from '../../assets/img/avatar.png'

const CaptinMainData = () => {
  return (
    <div className='grid grid-cols-9 grid-rows-5 lg:gap-y-7 lg:gap-x-4'>
      <div className='col-start-1 col-end-7 row-start-1 row-end-5'>
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
      <div className='col-start-1 col-end-7 row-start-5 row-end-6 shadow-added rounded-lg order-3 grid'>
        <div className='flex items-center justify-evenly flex-col md:flex-row place-items-center'>
          <Radio title='city to city' />
          <Radio title='phone activated' />
          <Radio title='gender' />
        </div>
      </div>
      <div className='row-start-1 row-end-3 col-start-7 col-end-10'>
        <CaptinEdit />
      </div>
      <div className='row-start-3 row-end-6 col-start-7 col-end-10'>
        <CaptinStatus />
      </div>
    </div>
  )
}

export default CaptinMainData
