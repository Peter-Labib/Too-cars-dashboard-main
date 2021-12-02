import React from 'react'
import Input from '../../shared/ui/Input'
import logo from '../../assets/img/logo-login.svg'

const Login = () => {
  return (
    <div className='grid place-content-center w-screen h-screen'>
      <div className='w-full p-2'>
        <div className='mx-auto mb-4 w-11/12'>
          <img className='w-full object-cover' src={logo} alt='logo' />
        </div>
        <div className=' mb-2'>
          <Input label='Email' type='text' name='login-email' />
        </div>
        <div className=''>
          <Input label='password' type='text' name='login-password' />
        </div>
      </div>
    </div>
  )
}

export default Login
