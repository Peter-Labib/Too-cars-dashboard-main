import React from 'react'

import HomeIcon from '../../assets/icon/home.svg'
// import dropdownIcon from '../../assets/icon/dropdown.svg'
// import countries from '../../assets/icon/countries.svg'

// const Dropdown = ({ name = 'countries', icon = countries, children }) => {
//   return (
//     <li className='flex '>
//       <span>{icon}</span>
//       <span>{name}</span>
//       <span>
//         <img src={dropdownIcon} alt='chevron' />
//       </span>
//     </li>
//   )
// }

const Sidebar = () => {
  return (
    <div className='shadow'>
      <div className='bg-grey-100 rounded-t-lg flex items-center text-black'>
        <span>
          <img src={HomeIcon} alt='Home' />
        </span>
        <span>Homee</span>
      </div>
      {/* <Dropdown /> */}
    </div>
  )
}

export default Sidebar
