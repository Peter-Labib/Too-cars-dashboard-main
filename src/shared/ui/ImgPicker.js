import React, { useRef } from 'react'

const ImgPicker = ({ label }) => {
  const filePickerRef = useRef()

  const pickImageHandler = () => {
    filePickerRef.current.click()
  }

  return (
    <div className='input-container-main-data-added'>
      <label className='truncate'>{label}</label>
      <div className='relative rounded-md  py-2 overflow-hidden'>
        <input type='file' ref={filePickerRef} accept='.jpg,.jpeg,.png' />
        <div className='absolute inset-0 bg-white'></div>
        <div className='absolute grid place-items-center inset-0  bg-secondary' onClick={pickImageHandler}>
            <p className='text-gray-400 text-center select-none'>Choose file</p>
        </div>
      </div>
    </div>
  )
}

export default ImgPicker
