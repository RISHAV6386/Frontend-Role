import React from 'react'

const Sidebar = () => {
const minRange=13.99
  const maxRange=25.99
  return (
    <div className="text-black p-3 px-8 h-full flex flex-col items-stretch gap-25">
      <div className=' bg-slate-100 p-4 rounded-lg space-y-10'>
      <h2 className='my-10 mt-0 text-3xl mb-20 font-bold'>Hot Deals</h2>
      <div className='flex justify-between text-2xl hover:text-blue-500'><button>Nike</button> <p className='ml-50'>2</p></div>
      <div className='flex justify-between text-2xl hover:text-blue-500'><button>Airmax</button> <p className='ml-50'>48</p></div>
      <div className='flex justify-between text-2xl hover:text-blue-500'><button>Nike</button> <p className='ml-50'>14</p></div>
      <div className='flex justify-between text-2xl hover:text-blue-500'><button>Adidas</button> <p className='ml-50'>15</p></div>
      <div className='flex justify-between text-2xl hover:text-blue-500'><button>Vans</button> <p className='ml-50'>23</p></div>
      <div className='flex justify-between text-2xl hover:text-blue-500'><button>All Star</button> <p className='ml-50'>1</p></div>
      <div className='flex justify-between text-2xl hover:text-blue-500'><button>Adidas</button> <p className='ml-50'>95</p></div>
      </div>
      <div className='space-y-4 bg-slate-100 p-4 rounded-lg'>
      <h2 className='my-10 mt-0 text-3xl mb-20 font-bold'>PRICES</h2>
      <div>
        <label htmlFor="price" className="flex justify-between text-2xl  text-gray-700">
          Ranger :<p>${minRange}-${maxRange}</p>
        </label>
        <input
          type="range"
          id="price"
          min={minRange}
          max={maxRange}
          className="mt-2 w-40 accent-blue-500"
        />
      </div>

  
      </div>
      <div className='space-y-4 bg-slate-100 p-4 rounded-lg'>
      <h2 className='my-10 mt-0 text-xl mb-20 font-bold'>COLOR</h2>
        <div className="flex gap-4">
    <button className="w-10 h-10 rounded-full bg-blue-500 border-2 border-transparent hover:border-black" data-color="#1c0deaff"></button>
    <button className="w-10 h-10 rounded-full bg-red-500 border-2 border-transparent hover:border-black" data-color="#f50c04ff"></button>
    <button className="w-10 h-10 rounded-full bg-black border-2 border-transparent hover:border-black" data-color="#0e0e0fff"></button>
    <button className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-transparent hover:border-black" data-color="#facc15"></button>
    <button className="w-10 h-10 rounded-full bg-purple-500 border-2 border-transparent hover:border-black" data-color="#8615f0ff"></button>
    <button className="w-10 h-10 rounded-full bg-slate-300 border-2 border-transparent hover:border-black" data-color="#838186ff"></button>
  </div>

  
      </div>
      <div className=' bg-slate-100 p-4 rounded-lg space-y-10'>
      <h2 className='my-10 mt-0 text-3xl font-bold mb-20'>BRAND</h2>
      <div className='flex justify-between text-2xl hover:text-blue-500'><button>Nike</button> <p className='ml-50'>99</p></div>
      <div className='flex justify-between text-2xl hover:text-blue-500'><button>Nike</button> <p className='ml-50'>99</p></div>
      <div className='flex justify-between text-2xl hover:text-blue-500'><button>Adidas</button> <p className='ml-50'>99</p></div>
      <div className='flex justify-between text-2xl hover:text-blue-500'><button>Siemens</button> <p className='ml-50'>99</p></div>
      </div>

      <div>
      <h2 className='my-10 pt-4 text-xl bg-slate-100 h-15 flex justify-center font-bold'>MORE</h2>
      </div>
    </div>
  )
}

export default Sidebar
