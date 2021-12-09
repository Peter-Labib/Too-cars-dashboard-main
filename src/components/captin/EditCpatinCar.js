import React from 'react'
import { strings } from '../../Localization/languages'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../../shared/ui/Dropdown'
import ImgPicker from '../../shared/ui/ImgPicker/ImgPicker'
import IconedInput from '../../shared/ui/IconedInput'
import Button from '../../shared/ui/Button'
import ImgPickerD from '../../shared/ui/ImgPicker/ImgPickerD'

const schema = yup.object({
  carModel: yup.string().required('Required'),
  carColor: yup.string().required('Required'),
  productionDate: yup.string().required('Required'),
  arabicCarNumber: yup.string().required('Required'),
  englishCarNumber: yup.string().required('Required'),
})

const EditCpatinCar = () => {
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => console.log(DataTransfer)

  return (
    <div className='w-full '>
      <p className='title-added text-main'>{strings.CarEdit}</p>
      <form onSubmit={handleSubmit(onSubmit)} className='shadowed-container-added p-4 '>
        <div className='grid grid-cols-2 '>
          <div className='h-20'>
            <Dropdown name='Car-model' label={strings.CarModel} />
          </div>
          <Dropdown name='Car-model' label={strings.CarColor} />
          <Dropdown name='Car model' label={strings.ProductionDate} />
          {/* <ImgPicker label={strings.CarImg} small /> */}
          <ImgPickerD label={strings.CarImg} small />
          <IconedInput
            {...register('arabicCarNumber')}
            type='text'
            label={strings.ArabicCarNum}
          >
            <FontAwesomeIcon icon={faCar} className='text-main' />
          </IconedInput>
          <IconedInput
            {...register('englishCarNumber')}
            type='text'
            label={strings.ArabicCarNum}
          >
            <FontAwesomeIcon icon={faCar} className='text-main' />
          </IconedInput>
        </div>
        <div className='mx-auto max-w-min mt-4'>
          <Button type='submit'>{strings.Submit}</Button>
        </div>
      </form>
    </div>
  )
}

export default EditCpatinCar
