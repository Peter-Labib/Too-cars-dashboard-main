import React from 'react'

const DetailCard = ({ textColor = 'text-black', count, countsFor }) => {
  return (
    <div className='col-span-1 shadow-lg flex flex-col text-center rounded-lg p-2'>
      <span className={`pt-4 pb-2 font-bold text-xl ${textColor}`}>
        {count}
      </span>
      <span className='select-none'>{countsFor}</span>
    </div>
  )
}

export default DetailCard
