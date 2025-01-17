import { useState, useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

const CandidateDashboard = () => {
  const router = useRouter()
  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='mb-3 text-2xl text-blue-900'>Candidate Dashboard</h1>
    </div>
  )
}

export default CandidateDashboard
