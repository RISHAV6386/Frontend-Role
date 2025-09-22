import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      {/* Left Section: Logo & Brand Name */}
      <div className='absolute left-0 top-0 flex items-center text-2xl font-bold py-2 px-8 mt-2 ml-2'>
        <img 
          className='h-8' 
          src="https://th.bing.com/th/id/OIP.FJRn2vXUbfz9yMvMWw_VCgHaB2?w=301&h=180&c=7&r=0&o=5&pid=1.7" 
          alt="Eco" 
        />
        <p>E-COMM</p>
      </div>

      {/* Center Section: Navigation Menu  */}
      <div className="bg-white flex justify-center text-2xl font-semibold space-x-20 px-2 py-2 text-black">
        {/* Navigation buttons (can be replaced with <Link> for routing) */}
        <button className='hover:text-blue-500'>HOME</button>
        <button className='hover:text-blue-500'>BAG</button>
        <button className='hover:text-blue-500'>SNEAKERS</button>
        <button className='hover:text-blue-500'>BELT</button>
        <button className='hover:text-blue-500'>CONTACT</button>
      </div>

      {/*Right Section: Cart Info  */}
      <div className='absolute right-15 top-0 flex items-center mt-2 mr-2'>
        <img 
          className='h-8 mx-2.5' 
          src="https://tse1.mm.bing.net/th/id/OIP._bmKNkVBWH4qD9fzVFBf0gAAAA?pid=ImgDet&w=200&h=200&c=7&o=7&rm=3" 
          alt="Cart Icon" 
        />
        Items 
        <p className='text-black px-2 font-mono'>$0.00</p>
      </div>
    </>
  )
}

export default Navbar
