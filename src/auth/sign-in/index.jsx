import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function signInPage() {
  return (
    <div className='flex items-center justify-center my-10'>
      <SignIn/>
    </div>
  )
}

export default signInPage
