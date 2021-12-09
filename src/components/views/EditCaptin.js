import React from 'react'
import EditCaptinRouteBox from '../captin/EditCaptinRouteBox'
import EditCaptinMainData from '../captin/EditCaptinMainData'
import CaptinStatus from '../captin/CaptinStatus'
import EditCpatinCar from '../captin/EditCpatinCar'
import BillCycle from '../captin/BillCycle'
import CaptinLicense from '../captin/CaptinLicense'
import BankAccount from '../captin/BankAccount'

const EditCaptin = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-x-4'>
        <div className='flex flex-col gap-y-4 lg:gap-y-6'>
          <EditCaptinMainData />
          <div>
            <BankAccount />
          </div>
          <div>
            <CaptinLicense />
          </div>
        </div>
        <div className='flex flex-col gap-y-4 lg:gap-y-6 w-full lg:w-2/5'>
          <EditCaptinRouteBox />
          <CaptinStatus />
          <EditCpatinCar />
        </div>
        <div></div>
      </div>
      <div className='mt-6'>
        <BillCycle />
      </div>
    </div>
  )
}

export default EditCaptin
