import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import CaptinEdit from './EditCaptin'
import CaptinStatus from './CaptinStatus'
import EditCpatinCar from './EditCpatinCar'
import BillCycle from './BillCycle'
import Input from '../../shared/ui/Input'
import Button from '../../shared/ui/Button'
import Dropdown from '../../shared/ui/Dropdown'
import Radio from '../../shared/ui/Radio'
import CaptinLicense from './CaptinLicense'
import avatar from '../../assets/img/avatar.png'

const schema = yup.object({
  name: yup.string().required('Required'),
  city: yup.string().required('Required'),
  address: yup.string().required('Required'),
  mobile: yup.number().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  password: yup.string().required('Required'),
  // birth: yup.string().required(''),
  nationality: yup.string().required('Required'),
  agency: yup.string().required('Required'),
  commission: yup.string().required('Required'),
  refferalCodeDriver: yup.string().required('Required'),
  refferalCodePassenger: yup.string().required('Required'),
  bonus: yup.string().required('Required'),
  guarantee: yup.string().required('Required'),
})

const EditCaptinMainData = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-x-4'>
        <div className='flex flex-col gap-y-4 lg:gap-y-6'>
          <div>
            <p className='title-added'>Captin profile</p>
            <form
              className=' shadow-added p-2 rounded-lg'
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='grid grid-cols-4 gap-2'>
                <div className='mx-auto border-2 col-span-4 md:col-span-2 lg:col-span-1 self-center h-auto border-blue-400 w-16 overflow-hidden rounded-full'>
                  <img
                    className='object-cover w-full'
                    src={avatar}
                    alt='avatar'
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='name'
                    control={control}
                    render={({ field }) => (
                      <Input
                        error={errors.name?.message}
                        name='name'
                        id='edit-captin-name'
                        label='Name'
                        type='text'
                        dir='auto'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='city'
                    control={control}
                    render={({ field }) => (
                      <Input
                        error={errors.city?.message}
                        name='city'
                        id='edit-captin-city'
                        label='City'
                        type='text'
                        dir='auto'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='address'
                    control={control}
                    render={({ field }) => (
                      <Input
                        error={errors.address?.message}
                        name='address'
                        id='edit-captin-address'
                        label='Address'
                        type='text'
                        dir='auto'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='mobile'
                    control={control}
                    render={({ field }) => (
                      <Input
                        error={errors.mobile?.message}
                        name='mobile'
                        id='edit-captin-mobile'
                        label='Mobile'
                        type='tel'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='email'
                    control={control}
                    render={({ field }) => (
                      <Input
                        error={errors.email?.message}
                        name='email'
                        id='edit-captin-email'
                        label='Email'
                        type='email'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                      <Input
                        error={errors.password?.message}
                        name='password'
                        id='edit-captin-password'
                        label='Password'
                        type='password'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='birth'
                    control={control}
                    render={({ field }) => (
                      <Input
                        error={errors.birth?.message}
                        name='birth'
                        id='edit-captin-birth'
                        label='Birth Date'
                        type='text'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='nationality'
                    control={control}
                    render={({ field }) => (
                      <Input
                        error={errors.nationality?.message}
                        name='nationality'
                        id='edit-captin-nationality'
                        label='Nationality'
                        type='text'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='agency'
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        error={errors.nationality?.message}
                        name='agency'
                        id='edit-captin-agency'
                        label='Agency'
                        options={[1, 2, 3, 4]}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='commission'
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        error={errors.commission?.message}
                        name='commission'
                        id='edit-captin-commission'
                        label='Commission'
                        options={[1, 2, 3, 4]}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='refferalCodeDriver'
                    control={control}
                    render={({ field }) => (
                      <Input
                        error={errors.refferalCodeDriver?.message}
                        name='refferalCodeDriver'
                        id='edit-captin-refferal-code-driver'
                        label='Refferal Code Driver'
                        type='text'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='refferalCodePassenger'
                    control={control}
                    render={({ field }) => (
                      <Input
                        error={errors.refferalCodePassenger?.message}
                        name='refferal-code-passenger'
                        id='edit-captin-refferal-code-passenger'
                        label='Refferal Code Passenger'
                        type='text'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='bonus'
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        error={errors.bonus?.message}
                        name='bonus'
                        id='edit-captin-bonus'
                        label='Bonus'
                        options={[1, 2, 3, 4]}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='captin-main-data-col-added'>
                  <Controller
                    name='guarantee'
                    control={control}
                    render={({ field }) => (
                      <Dropdown
                        error={errors.guarantee?.message}
                        name='guarantee'
                        id='edit-captin-guarantee'
                        label='Guarantee'
                        options={[1, 2, 3, 4]}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='col-span-4 mt-4'>
                  <div className='flex items-center justify-between px-8 flex-col md:flex-row place-items-center'>
                    <Radio title='city to city' />
                    <Radio title='phone activated' />
                    <Radio title='gender' />
                  </div>
                </div>
              </div>
              <div className='mx-auto max-w-min w-3/12 mt-4'>
                <Button text='Submit' type='submit' />
              </div>
            </form>
          </div>
          {/* <div className='flex items-center justify-evenly flex-col md:flex-row place-items-center shadow-added rounded-lg py-2'>
          <Radio title='city to city' />
          <Radio title='phone activated' />
          <Radio title='gender' />
        </div> */}
          <div className='flex flex-col md:flex-row justify-evenly gap-x-8 px-12 py-6 shadow-added rounded-lg'>
            <Input label='Bank Name' />
            <Input label='Bank Account' />
          </div>
          <div>
            <CaptinLicense />
          </div>
        </div>
        <div className='flex flex-col gap-y-4 lg:gap-y-6'>
          <div>
            <CaptinEdit />
          </div>
          <div>
            <CaptinStatus />
          </div>
          <div>
            <EditCpatinCar />
          </div>
        </div>
        <div></div>
      </div>
      <div className='mt-6 max-w-min'>
        <BillCycle />
      </div>
    </div>
  )
}

export default React.memo(EditCaptinMainData)
