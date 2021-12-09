import React from 'react'

const IconedInput = React.forwardRef(
  (
    {
      onChange,
      label,
    //   value = '',
      children,
      id,
      name,
      error = '',
      classes = '',
      ...atr
    },
    ref
  ) => {
    return (
      <div className='input-container-main-data-added'>
        <label className='truncate' htmlFor={id}>
          {label}
        </label>
        <div
          className={`flex bg-secondary rounded-md overflow-hidden transition ${
            error
              ? 'ring-red-500 ring-1'
              : 'focus-within:ring-blue-200 focus-within:ring-opacity-50 focus-within:ring-4'
          } `}
        >
          <div className='w-full'>
            <input
              className='w-full bg-secondary outline-none p-2'
              {...atr}
              id={id}
              ref={ref}
              onChange={onChange}
              name={name}
            />
          </div>
          <div className='bg-secondary flex items-center px-2'>{children}</div>
        </div>
        <p className='error-text'>{error}</p>
      </div>
    )
  }
)

export default IconedInput
