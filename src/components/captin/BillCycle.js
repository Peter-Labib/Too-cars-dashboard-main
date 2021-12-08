import React, { useState, Fragment } from 'react'
import {v4 as uuidv4} from 'uuid'
import { Listbox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {strings} from '../../Localization/languages'
import CardDetail from '../../shared/component/DetailCard'

const cycles = [
  { from: '20/10/2000', to: '26/9/2020' },
  { from: '20/10/2000', to: '26/9/2020' },
  { from: '20/10/2000', to: '26/9/2020' },
  { from: '20/10/2000', to: '26/9/2020' },
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
            enter='transition ease-in duration-100'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute py-1 overflow-auto text-base bg-white rounded-b-md shadow-lg w-60 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {cycles.map((cycle) => (
                <Listbox.Option
                  key={uuidv4()}
                  className={({ active }) =>
                    `${
                      active ? 'bg-main text-white' : 'bg-white text-black'
                    } cursor-default select-none relative transition my-2 rounded-sm shadow-md overflow-hidden `
                  }
                  value={cycle}
                >
                  {({ selected, active }) => (
                    <div
                      className={`${
                        selected
                          ? 'font-medium bg-main text-white'
                          : 'font-normal'
                      } flex items-center justify-around py-2`}
                    >
                      <p className='flex items-center gap-x-2'>
                        <span
                          className={`${
                            !active && !selected ? 'text-red-500' : ''
                          } `}
                        >
                          {strings.From}
                        </span>
                        <span>{cycle.from}</span>
                      </p>
                      <p className='flex items-center gap-x-2'>
                        <span
                          className={`${
                            !active && !selected ? 'text-green--extended' : ''
                          }`}
                        >
                          {strings.To}
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
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6 p-6 shadowed-container-added '>
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
          <CardDetail
            textColor='text-blue--extended'
            count='1500'
            countsFor='reject times'
          />
        </div>
    </div>
  )
}

export default BillCycle
