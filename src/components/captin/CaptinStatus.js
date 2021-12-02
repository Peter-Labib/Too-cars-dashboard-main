import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ToggleBtn from '../../shared/ui/ToggleBtn'
import acceptanceIcon from '../../assets/icon/acceptance.svg'

const InfoCard = ({ title, children }) => (
  <div className='shadow-added rounded-lg flex flex-col p-2  '>
    <p className='truncate text-sm pb-2'>{title}</p>
    {children}
  </div>
)

const CaptinStatus = ({ state, rate = 0, acceptance = 0 }) => {
  console.log('re')
  return (
    <div className='grid grid-cols-3 grid-rows-4 gap-4 rounded-lg shadow-added h-full p-4'>
      <InfoCard title='user status'>
        <ToggleBtn />
      </InfoCard>
      <InfoCard title='rating'>
        {
          <div className='flex gap-x-1 items-center mx-auto'>
            <span className='text-main font-semibold'>{rate}</span>
            <FontAwesomeIcon icon={faStar} color='#FFD80C' />
          </div>
        }
      </InfoCard>
      <InfoCard title='Acceptance rate'>
        {
          <div className='mx-auto'>
            <p className='inline-block pr-1 float-left text-main font-semibold'>
              {acceptance}
            </p>
            <img
              className='align-middle inline-block'
              src={acceptanceIcon}
              alt='percentag'
            />
          </div>
        }
      </InfoCard>
      <InfoCard title='Added time'>
        <p className='text-main font-semibold'>15/6/2021</p>
      </InfoCard>
      <InfoCard title='Added time'>
        <p className='text-main font-semibold'>15/6/2021</p>
      </InfoCard>
      <InfoCard title='Added time'>
        <p className='text-main font-semibold'>15/6/2021</p>
      </InfoCard>
      <InfoCard title='Added time'>
        <p className='text-main font-semibold'>15/6/2021</p>
      </InfoCard>
      <InfoCard title='Added time'>
        <p className='text-main font-semibold'>15/6/2021</p>
      </InfoCard>
      <InfoCard title='Added time'>
        <p className='text-main font-semibold'>15/6/2021</p>
      </InfoCard>
      <InfoCard title='Added time'>
        <p className='text-main font-semibold'>15/6/2021</p>
      </InfoCard>
      <InfoCard title='Added time'>
        <p className='text-main font-semibold'>15/6/2021</p>
      </InfoCard>
      <InfoCard title='Added time'>
        <p className='text-main font-semibold'>15/6/2021</p>
      </InfoCard>
    </div>
  )
}

export default CaptinStatus
