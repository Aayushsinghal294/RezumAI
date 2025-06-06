import { useState } from 'react'
import './App.css'
import {  Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';
import Header from './components/custom/Header';

function App() {

  const [count, setCount] = useState(0);
  const {user,isLoaded,isSignedIn} = useUser();

  if(!isSignedIn && isLoaded)  // Check if user is not signed in and Clerk has finished loading
  {
    return <Navigate to={'/auth/sign-in'}/>
  }

  return (
   <>
   <Header/>
   <Outlet/>
   </>
  )
}

export default App
