import React from 'react'
import {strings} from '../../Localization/languages'
import Input from '../../shared/ui/Input'
import Button from '../../shared/ui/Button'
const BankAccount = () => {
  return (
    <div className='w-full'>
      <p className='title-added'>{strings.BankAccount}</p>
      <form className='shadowed-container-added p-4'>
        <div className='flex flex-col md:flex-row justify-evenly gap-x-8 '>
          <Input label={strings.BankAccount} />
          <Input label={strings.BankAccountNumber} />
        </div>
        <div className='mx-auto max-w-min mt-3'>
          <Button type='submit'>{strings.Submit}</Button>
        </div>
      </form>
    </div>
  )
}

export default BankAccount
