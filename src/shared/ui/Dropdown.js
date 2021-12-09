import React, { Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Listbox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = React.forwardRef(
  ({ name, id, options = [], onChange, value, error, label }, ref) => {
    // const [val, setVal] = useState('')

    // const dropdownOnClickHandler = (e) => {
    //   const value = e.target.value
    //   setVal(value)
    //   onChange(value)
    // }

    return (
      <div className='input-container-main-data-added'>
        <label className='truncate'>{label}</label>
        <div className='relative h-10'>
          <select
            className='w-full outline-none'
            onChange={onChange}
            ref={ref}
          >
            {options.map((option) => (
              <option key={uuidv4()} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className='absolute pointer-events-none inset-0 bg-white'></div>
          <div className='absolute inset-0 pointer-events-none p-2 flex items-center justify-between bg-secondary rounded-md z-10'>
            <span>{value}</span>
            <FontAwesomeIcon icon={faChevronDown} className='text-main' />
          </div>
        </div>
        <p className='error-text'>{error}</p>

        {/* <label htmlFor={id}>{name}</label>
        <Listbox value={value} onChange={onChange} ref={ref} name={name}>
          <div className='relative'>
            <Listbox.Button className='flex p-2 items-center justify-between bg-secondary rounded-md w-full'>
              <span>{value}</span>
              <span>
                <FontAwesomeIcon icon={faChevronDown} className='text-main' />
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
              <Listbox.Options className='absolute mb-0 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg w-60 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
{options.map((option=>(
  <Listbox.Option key={uuidv4()} className={({active})=>`${active? 'text-white':'text-secondary'}`}>
<span>{option}</span>
  </Listbox.Option>
)))}

              </Listbox.Options>
            </Transition>
          </div>
        </Listbox> */}
      </div>
    )
  }
)

export default Dropdown
