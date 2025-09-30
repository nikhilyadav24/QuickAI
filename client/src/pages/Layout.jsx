import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';
import { X, Menu } from 'lucide-react';
import Sidebar from '../components/Sidebar';    
import { SignIn, useUser } from '@clerk/clerk-react';

const Layout = () => {
    const navigate = useNavigate();
    const [sidebar, setsidebar] = useState(false);

    const { user } = useUser();

  return user ? (
    <div>
        <div className='flex flex-col items-start justify-start h-screen'>
            <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200'>
                <img src={assets.logo} alt="logo" onClick={()=> navigate('/')} />
                {
                    sidebar ? <X onClick={()=> setsidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden'/> : <Menu onClick={()=> setsidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden'/>
                }
            </nav>
            <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
                <Sidebar sidebar={sidebar} setsidebar={setsidebar}/>
                <div className='flex-1 bg-[#F4F7FB] p-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
        <SignIn />
    </div>
  )
}

export default Layout