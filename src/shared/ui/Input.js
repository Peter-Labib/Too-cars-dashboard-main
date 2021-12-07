import React from 'react'

const Input = React.forwardRef(
  (
    { onChange, label, value = '', id, error = '', classes = '', ...atr },
    ref
  ) => {
    return (
      <div className='input-container-main-data-added'>
        <label className='truncate' htmlFor={id}>
          {label}
        </label>
        <input
          className={`${classes} p-2 transition bg-secondary text-gray-500 rounded-md focus:outline-none  ${
            error
              ? 'ring-red-500 ring-1'
              : 'focus:ring-blue-200 focus:ring-opacity-50 focus:ring-4'
          }  `}
          // value={value}
          ref={ref}
          onChange={onChange}
          id={id}
          {...atr}
        />
        <p className='error-text'>{error}</p>
      </div>
    )
  }
)

export default Input
