import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import ImagePicker from '../../shared/ui/ImgPicker/ImgPicker'
import Button from '../../shared/ui/Button'

import { strings } from '../../Localization/languages'
// import { validateImage } from '../../utils/functions'

// const schema = yup.object({
//   drivingLicenseFront: yup
//     .mixed()
//     .required('Required')
//     .test('fileSize', 'max size 4mb', (value) => validateImage(value)),
// })

const CaptinLicense = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <div className='w-full'>
      <p className='title-added'>{strings.CaptinLicense}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='shadowed-container-added p-4'
      >
        <div className='grid grid-cols-2 gap-x-4 '>
          <Controller
            name='drivingLicenseFront'
            control={control}
            render={({ field }) => (
              <ImagePicker
                label={strings.DrivingLicenseFront}
                id='driving-license-front'
                name='drivingLicenseFront'
                {...field}
              />
            )}
          />

          <ImagePicker label='choose pic' />
          <ImagePicker label='choose pic' />
          <ImagePicker label='choose pic' />
          <ImagePicker label='choose pic' />
          <ImagePicker label='choose pic' />
          <ImagePicker label='choose pic' />
          <ImagePicker label='choose pic' />
          <ImagePicker label='choose pic' />
          <ImagePicker label='choose pic' />
          <ImagePicker label='choose pic' />
          <ImagePicker label='choose pic' />
          <ImagePicker label='choose pic' />
        </div>
        <div className='mx-auto max-w-min mt-4'>
          <Button type='submit'>submit</Button>
        </div>
      </form>
    </div>
  )
}

export default CaptinLicense
