import React from 'react'

const InfoCard = ({ title, children }) => (
  <div className='shadow-added rounded-lg'>
    <p>{title}</p>
    {children}
  </div>
)

const CaptinStatus = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-4 gap-x-4 rounded-lg shadow-added h-full p-4'>
      <InfoCard title='user status'>

      </InfoCard>
    </div>
  )
}

export default CaptinStatus
