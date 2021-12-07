import React, { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const cycles = [
  { from: '20/10/2000', to: '26/9/2020' },
  { from: '20/10/2000', to: '26/9/2020' },
  { from: '20/10/2000', to: '26/9/2020' },
  { from: '20/10/2000', to: '26/9/2020' },
  { from: '20/10/2000', to: '26/9/2020' },
]

const BillCycle = () => {
  const [selected, setSelected] = useState('')
  return (
    <div className='w-full'>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative'>
          <Listbox.Button className='bg-main text-white p-2 flex justify-between items-center rounded-t-lg w-60'>
            <span className='block truncate font-semibold text-lg'>
              Bill Cycle
            </span>
            <span className='flex items-center'>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute w-full mb-0 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {cycles.map((cycle, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `${
                      active ? 'bg-main text-white' : 'bg-white text-black'
                    } cursor-default select-none relative transition my-2 rounded-sm shadow-md overflow-hidden py-2`
                  }
                  value={cycle}
                >
                  {({ selected, active }) => (
                    <div
                      className={`${
                        selected
                          ? 'font-medium bg-main text-white'
                          : 'font-normal'
                      } flex items-center justify-around `}
                    >
                      <p className='flex items-center gap-x-2'>
                        <span className={`${!active ? 'text-red-500' : ''} `}>
                          from
                        </span>
                        <span>{cycle.from}</span>
                      </p>
                      <p className='flex items-center gap-x-2'>
                        <span
                          className={`${!active ? 'text-green--extended' : ''}`}
                        >
                          to
                        </span>
                        <span>{cycle.to}</span>
                      </p>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default BillCycle
