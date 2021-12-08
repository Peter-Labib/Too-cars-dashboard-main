import React, { useRef, useState } from 'react'
import Lightbox from 'react-image-lightbox'
import { Transition } from '@headlessui/react'
import styles from './ImgPicker.module.scss'

const ImgPicker = React.forwardRef(({ label, name, onChange, id }, ref) => {
  const [val, setVal] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg'
  )
  const [lightboxOpen, setLightboxOpen] = useState(false)
  // const filePickerRef = useRef()

  const pickImageHandler = () => {
    // filePickerRef.current.click()
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const openLightbox = () => {
    setLightboxOpen(true)
  }
  const removeImg = () => {
    window.setTimeout(() => {
      setVal(null)
    }, 500)
  }

  return (
    <div className='input-container-main-data-added'>
      {lightboxOpen && (
        <Lightbox mainSrc={val} onCloseRequest={closeLightbox} />
      )}
      <label className='truncate' htmlFor={id}>
        {label}
      </label>
      <div className='relative rounded-md  py-2 overflow-hidden'>
        <input type='file' id={id} ref={ref} onChange={onChange} />
        <div className='absolute inset-0 bg-white pointer-events-none'></div>
        <div
          className='absolute grid place-items-center inset-0  bg-secondary pointer-events-none'
          onClick={pickImageHandler}
        >
          {/* rtl modification */}
          {/* {val ? (
            <React.Fragment>
              <div
                className={`${styles.close_scss} z-10 close-scss bg-red-600 text-white cursor-pointer pointer-events-auto w-3 h-3 transform -translate-y-full -translate-x-full rounded-sm absolute grid place-content-center text-xs`}
                onClick={removeImg}
              >
                <span>x</span>
              </div>
              <div
                className={`${styles.img_scss} img-scss w-6 h-6 overflow-hidden rounded-sm cursor-pointer pointer-events-auto`}
                onClick={openLightbox}
              >
                <img src={val} alt={label} className='object-cover w-full' />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className='text-gray-400 text-center select-none'>
                Choose file
              </p>
            </React.Fragment>
          )} */}
          <Transition
            show={!!val}
            enter='transition duration-150'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition duration-1000'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-100'
          >
            <div
              className={`${styles.close_scss} z-10 bg-red-600 text-white cursor-pointer pointer-events-auto w-3 h-3 transform -translate-y-1/2 -translate-x-1/2 rounded-sm absolute grid place-content-center text-xs shadow-md`}
              onClick={removeImg}
            >
              <span>x</span>
            </div>
            <div
              className={`${styles.img_scss} w-6 h-6 overflow-hidden rounded-sm cursor-pointer pointer-events-auto shadow-lg`}
              onClick={openLightbox}
            >
              <img src={val} alt={label} className='object-cover w-full' />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  )
})

export default ImgPicker
