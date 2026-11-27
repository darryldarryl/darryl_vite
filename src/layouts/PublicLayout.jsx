import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/navbar'
import Footer from '../components/footer'



export const PublicLayout = () => {
  return (
    <div className='flex min-h-screen  flex-col'>
        <Navbar/>
        <main className='flex flex-1'>
          <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default PublicLayout
