import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAccountType } from 'store/account-type_store'

import AccountSelect from 'assets/images/AccountSelect'
import getText from 'utils/i18n/Texts'

const Dashboard = () => {
  const router = useRouter()
  const accountType = useAccountType((s) => s.accountType)
  const setAccountType = useAccountType((s) => s.setAccountType)

  console.log('AccountType:', accountType)

  const handleCandidate = () => {
    console.log('handleCandidate')
    router.push('sign-up?accountType=candidate')
  }

  const handleCompany = () => {
    console.log('handleCompany')
    router.push('sign-up?accountType=company')
  }
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='mb-12'>
        <h1 className='mb-3 text-5xl text-blue-900'>
          {getText('ACCOUNT', 'WELCOME')}
        </h1>
        <p className='opacity-75'>{getText('ACCOUNT', 'WELCOME_INTRO')}</p>
      </div>

      <div className='flex flex-col items-start justify-between md:flex-row md:space-x-14'>
        <AccountSelect className='order-2 hidden mt-12 md:block md:w-1/2 md:order-1' />
        <div className='flex flex-col justify-start order-1 w-full mb-24 space-y-12 text-center md:pl-6 md-order-2 md:w-1/2'>
          <button
            className={`px-4 py-8 rounded-md shadow border-left cursor-pointer hover:bg-gray-100 transform ease-in-out duration-150 ${
              accountType === 'candidate'
                ? 'bg-gray-100 scale-105 ring-1 ring-teal'
                : ''
            }`}
            onClick={() => setAccountType('candidate')}
          >
            <h3 className='text-2xl'>{getText('ACCOUNT', 'CANDIDATE')}</h3>
            <p className='opacity-75'>
              {getText('ACCOUNT', 'CANDIDATE_SELECT')}
            </p>
          </button>

          <button
            className={`px-4 py-8 rounded-md shadow border-left cursor-pointer hover:bg-gray-100 transform ease-in-out duration-150 ${
              accountType === 'company'
                ? 'bg-gray-100 scale-105 ring-1 ring-teal'
                : ''
            }`}
            onClick={() => setAccountType('company')}
          >
            <h3 className='text-2xl'>{getText('ACCOUNT', 'COMPANY')}</h3>
            <p className='opacity-75'>{getText('ACCOUNT', 'COMPANY_SELECT')}</p>
          </button>

          <button
            className={`md:w-1/2 btn btn-teal justify-self-start ${
              !accountType ? 'btn-disabled' : ''
            }`}
            onClick={
              accountType === 'candidate' ? handleCandidate : handleCompany
            }
          >
            {getText('ACCOUNT', 'CONTINUE')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
