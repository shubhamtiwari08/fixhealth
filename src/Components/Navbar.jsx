import React from 'react'
import { useNavigate } from 'react-router'

function Navbar() {

    const navigate = useNavigate()

  return (
    <div className='w-full flex items-center justify-between py-2 px-20 bg-slate-800'>
        <div className=' w-36 border rounded-lg overflow-hidden border-teal-700 cursor-pointer' onClick={()=> navigate('/')}>
            <img src="https://res.cloudinary.com/dmyost0l3/image/upload/v1706106104/Screenshot_2024-01-24_124437_rvuljd.png" alt="logo" />
        </div>
        <ul className='flex items-center gap-4 font-semibold text-white'>
            <li className='text-teal-300'>Home</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>About</li>
            <li><button className='p-1 bg-[#00ACC1] rounded-md text-white font-bold'>Book Now</button></li>
        </ul>

    </div>
  )
}

export default Navbar