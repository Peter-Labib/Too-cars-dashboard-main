import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { strings } from '../../Localization/languages'
import Input from '../../shared/ui/Input'
import Button from '../../shared/ui/Button'
import logo from '../../assets/img/Untitled-2.png'

const schema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup.string().required('Required'),
})

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => console.log(data)

  return (
    <div className='grid place-content-center w-screen h-screen py-2 px-5'>
      <div className='md:max-w-xs '>
        <div className='mx-auto mb-4 w-11/12'>
          <img
            className='w-full object-cover filter drop-shadow-2xl'
            src={logo}
            alt='logo'
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-1'>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <Input
                  label={strings.Email}
                  type='text'
                  name='email'
                  id='login-email'
                  classes='rounded-3xl'
                  error={errors.email?.message}
                  {...field}
                />
              )}
            />
          </div>
          <div className='mb-6'>
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <Input
                  label={strings.Password}
                  type='password'
                  name='password'
                  id='login-password'
                  classes='rounded-3xl'
                  error={errors.password?.message}
                  {...field}
                />
              )}
            />
          </div>
          <div className='mx-auto w-7/12'>
            <Button type='submit' login>
              {strings.Login}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
