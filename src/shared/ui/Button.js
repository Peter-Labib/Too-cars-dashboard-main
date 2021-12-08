import React from 'react'

const Button = ({ login, children, ...atr }) => {
  return (
    <button
      className={`${
        login ? 'py-2 w-full' : 'py-1'
      } text-white bg-main rounded-3xl px-6`}
      {...atr}
    >
      {children}
    </button>
  )
}

export default Button
