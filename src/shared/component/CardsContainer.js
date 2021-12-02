import React from 'react'

const CardsContainer = ({ title, children }) => {
  return (
    <div className='w-full pb-6 px-2 text-center shadow-added rounded-lg overflow-hidden'>
      <h3 className='text-main font-semibold text-lg py-4'>{title}</h3>
      <div className='grid grid-cols-2 gap-x-2 gap-y-4'>{children}</div>
    </div>
  )
}

export default CardsContainer
