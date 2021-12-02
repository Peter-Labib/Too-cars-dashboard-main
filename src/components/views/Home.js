import React from 'react'
import CardsContainer from '../../shared/component/CardsContainer'
import Card from '../../shared/component/Card'
import icon from '../../assets/icon/users.svg'

const OsUsersCount = ({ color, os, count }) => (
  <div className='flex gap-x-1 items-center'>
    <div
      className='rounded-full'
      style={{ background: color, height: '.8rem', width: '.8rem' }}
    ></div>
    <span className='text-sm'>{os}</span>
    <span className='font-semibold'>{count}</span>
  </div>
)

const Home = () => {
  return (
    <div className='grid grid-cols-6 gap-x-4'>
      {/* all users circule */}
      <div className='col-span-6 md:col-span-3 lg:col-span-2 mb-4 rounded-lg shadow-added px-2 md:px-4 py-6 flex flex-col gap-y-7 lg:self-start items-center overflow-hidden'>
        <div className='flex gap-x-2'>
          <span>
            <img src={icon} alt='users' />
          </span>
          <span className='font-semibold'>All users</span>
          <span className='text-main font-semibold'>64128</span>
        </div>
        <div className='flex gap-x-2'>
          <OsUsersCount color='#60A0FF' os='Android' count='15887' />
          <OsUsersCount color='#FF6161' os='Iphone' count='15887' />
          <OsUsersCount color='#00BB40' os='Web' count='15887' />
        </div>
        <div className='w-full relative h-44'>
          <div
            className='w-32 grid place-items-center rounded-full absolute opacity-70'
            style={{
              background:
                'linear-gradient(195.26deg, #60A0FF 23.55%, #3C43FF 90.31%)',
              boxShadow: '0px 22.1736px 43.3616px rgba(192, 0, 240, 0.2)',
              height: '8rem',
              top: '0',
              left: '38%',
            }}
          >
            <span className='text-white'>8000</span>
          </div>
          <div
            className='w-24 grid place-items-center rounded-full absolute opacity-70'
            style={{
              background:
                'linear-gradient(89.54deg, #FF6161 0.46%, #FF0000 118.27%)',
              boxShadow: '0px 17.2461px 24.6373px rgba(104, 208, 215, 0.1)',
              height: '6rem',
              top: '28%',
              left: '14%',
            }}
          >
            <span className='text-white'>8000</span>
          </div>
          <div
            className='w-16 grid place-items-center rounded-full absolute opacity-70'
            style={{
              background:
                'linear-gradient(329.04deg, #00BB40 34.42%, #10C659 99.58%)',
              boxShadow: '0px 17.7389px 18.7243px rgba(198, 107, 0, 0.05)',
              height: '4rem',
              top: '60%',
              left: '34%',
            }}
          >
            <span className='text-white'>8000</span>
          </div>
        </div>
      </div>

      {/* second col */}
      <div className='col-span-6 md:col-span-3 lg:col-span-2 self-start flex flex-col gap-y-4 lg:gap-y-8 mb-4'>
        <CardsContainer title='pessengers'>
          <Card color='green--extended' count='45484' countsFor='active' />
          <Card color='purple--extended' count='45484' countsFor='active' />
          <Card color='red--extended' count='45484' countsFor='active' />
        </CardsContainer>
        <CardsContainer title='Supervisors'>
          <Card color='red--extended' count='45484' countsFor='active' />
          <Card color='green--extended' count='45484' countsFor='active' />
        </CardsContainer>
      </div>
      {/* third col */}
      <div className='col-span-6 md:col-span-3 lg:col-span-2 self-start'>
        <CardsContainer title='pessengers'>
          <Card color='green--extended' count='45484' countsFor='active' />
          <Card color='red--extended' count='45484' countsFor='active' />
          <Card color='black--extended' count='45484' countsFor='active' />
          <Card color='black--extended' count='45484' countsFor='active' />
          <Card color='purple--extended' count='45484' countsFor='active' />
        </CardsContainer>
      </div>
    </div>
  )
}

export default Home
