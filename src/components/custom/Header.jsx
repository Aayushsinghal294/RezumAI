import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react';

const Header = () => {
  const {user,isSignedIn} = useUser();
  return (
    <div className=' px-7 flex justify-between shadow-md bg-black'>
      <img src="/logo.svg" width={150} />

{
  isSignedIn?
  <div className='flex gap-3 items-center'>
    <Link to={'/dashboard'}>
    <Button variant="outline">Dashboard</Button>
    </Link>
    <UserButton/></div>:
    
      <Link to={'/auth/sign-in'}>
      <Button className='mt-7 mr-5'>Get Started</Button>
      </Link>
}


    </div>
  )
}

export default Header
