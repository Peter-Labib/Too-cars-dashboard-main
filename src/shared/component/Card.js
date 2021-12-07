import React from 'react'

const Card = ({ color = 'black', count, countsFor }) => {
  return (
    <div className='col-span-1 shadow-lg flex flex-col rounded-lg p-2'>
      <span className={`pt-4 pb-2 font-semibold text-lg text-${color}`}>
        {count}
      </span>
      <span>{countsFor}</span>
    </div>
  )
}

export default Card
