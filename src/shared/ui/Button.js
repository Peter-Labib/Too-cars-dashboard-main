import React from 'react'

const Button = ({ text, login, ...atr }) => {
  return (
    <button
      className={`${
        login ? 'py-2' : 'py-1'
      } w-full text-white bg-main rounded-3xl px-6`}
      {...atr}
    >
      {text}
    </button>
  )
}

export default Button
