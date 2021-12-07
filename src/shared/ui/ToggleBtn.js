import React, { useState } from 'react'
import { Switch } from '@headlessui/react'

const ToggleBtn = ({ status }) => {
  const [enabled, setEnabled] = useState(true)
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-green-500' : 'bg-gray-600'}
          relative mx-auto items-center flex flex-shrink-0 h-5.5 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className='sr-only'>Use setting</span>
      <span
        aria-hidden='true'
        className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
      />
    </Switch>
  )
}

export default ToggleBtn
