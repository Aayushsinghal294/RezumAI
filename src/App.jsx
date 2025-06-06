import { useState } from 'react'
import './App.css'
import {  Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';

function App() {

  const [count, setCount] = useState(0);
  const {user,isLoaded,isSignedIn} = useUser();

  if(!isSignedIn && isLoaded)  // Check if user is not signed in and Clerk has finished loading
  {
    return <Navigate to={'/auth/sign-in'}/>
  }

  return (
   <>
   <Outlet/>
   </>
  )
}

export default App
