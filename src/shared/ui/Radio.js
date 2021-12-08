import React, { useState, useEffect } from 'react'
import { strings } from '../../Localization/languages'

const Radio = ({ title, value = 'false' }) => {
  const [val, setVal] = useState()

  useEffect(() => {
    setVal(value)
  }, [value])

  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setVal(e.target.value)
  }

  return (
    <div>
      <p className='text-center pb-2 block font-medium'>{title}</p>
      <div className='flex gap-x-2 justify-center'>
        <div className='flex items-center gap-x-1'>
          <input
            type='radio'
            //   id={title}
            //   name={title}
            value={'false'}
            onChange={onChangeHandler}
            checked={val === 'false'}
          ></input>
          <label>{strings.No}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='radio'
            //   id={title}
            //   name={title}
            value={'true'}
            onChange={onChangeHandler}
            checked={val === 'true'}
          ></input>
          <label name={title}>{strings.Yes}</label>
        </div>
      </div>
    </div>
  )
}

export default Radio
