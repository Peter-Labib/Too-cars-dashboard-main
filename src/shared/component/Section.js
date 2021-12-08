import React from 'react'

const Section = ({ title, children, titleCentered }) => {
  return (
    <div className={` w-full shadow-added rounded-lg overflow-hidden`}>
      <h3
        className={`${
          titleCentered && 'text-center'
        } text-main font-semibold text-lg py-4`}
      >
        {title}
      </h3>
      {children}
    </div>
  )
}

export default Section
