import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = React.forwardRef(
  ({ name, options = [], onChange, value, error }, ref) => {
    // const [val, setVal] = useState('')

    // const dropdownOnClickHandler = (e) => {
    //   const value = e.target.value
    //   setVal(value)
    //   // onChange(value)
    // }

    return (
      <div className='input-container-main-data-added'>
        <label>{name}</label>
        <div className='relative h-full'>
          <select
            className='w-full h-full outline-none'
            onChange={onChange}
            ref={ref}
          >
            {options.map((option, i) => (
              <option key={option + i} value={option}>
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
      </div>
    )
  }
)

export default Dropdown
