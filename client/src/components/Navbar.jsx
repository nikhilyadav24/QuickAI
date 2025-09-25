import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useUser, UserButton, useClerk } from '@clerk/clerk-react'

const Navbar = () => {
    const navigate = useNavigate()
    const { user } = useUser()
    const { openSignIn } = useClerk()
  return (
    <div className='fixed top-0 left-0 z-50 w-full backdrop-blur-2xl cursor-pointer flex justify-between items-center px-4 py-3 sm:px-20 xl:px-32'>
        <img src={assets.logo} alt="logo" className='w-30 sm:w-44' onClick={() => navigate('/')}/>
        
        {
            user ? <UserButton/> : (
                <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get Started <ArrowRight className='w-4 h-4' /></button>
            )
        }

    </div>
  )
}

export default Navbar