import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {strings} from '../../Localization/languages'
import Section from '../../shared/component/Section'
import ToggleBtn from '../../shared/ui/ToggleBtn'
import acceptanceIcon from '../../assets/icon/acceptance.svg'

const InfoCard = ({ title, children }) => (
  <div className='shadow-added rounded-lg flex flex-col p-2  '>
    <p className='truncate text-sm pb-2 select-none'>{title}</p>
    {children}
  </div>
)

const CaptinStatus = ({ state, rate = 0, acceptance = 0 }) => {
  console.log('re')
  return (
    <div className='grid grid-cols-2 md:grid-cols-3  gap-4 shadowed-container-added w-full p-4'>
      <InfoCard title={strings.UserStatus}>
        <ToggleBtn />
      </InfoCard>
      <InfoCard title={strings.Rating}>
        {
          <div className='flex gap-x-1 items-center mx-auto'>
            <span className='text-main font-semibold'>{rate}</span>
            <FontAwesomeIcon icon={faStar} color='#FFD80C' />
          </div>
        }
      </InfoCard>
      <InfoCard title={strings.AcceptanceRate}>
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
      <InfoCard title={strings.CreatedAt}>
        <p className='text-main font-semibold truncate'>15/6/2021</p>
      </InfoCard>
      <InfoCard title={strings.LastUpdate}>
        <p className='text-main font-semibold truncate'>15/6/2021</p>
      </InfoCard>
      <InfoCard title={strings.Balance}>
        <p className='text-main font-semibold truncate'>0</p>
      </InfoCard>
      <InfoCard title={strings.RejectTimes}>
        <p className='text-main font-semibold truncate'>0</p>
      </InfoCard>
      <InfoCard title={strings.RefferalCodeForDrivers}>
        <p className='text-main font-semibold truncate'>35d9812</p>
      </InfoCard>
      <InfoCard title={strings.RefferalCodeForPessengers}>
        <p className='text-main font-semibold truncate'>35d9812</p>
      </InfoCard>
      <InfoCard title={strings.CarType}>
        <p className='text-main font-semibold truncate'>Nissan</p>
      </InfoCard>
      <InfoCard title={strings.ActivationCode}>
        <p className='text-main font-semibold truncate'>35d9812</p>
      </InfoCard>
      <InfoCard title={strings.MobileType}>
        <p className='text-main font-semibold truncate'>android samsung</p>
      </InfoCard>
    </div>
  )
}

export default CaptinStatus
