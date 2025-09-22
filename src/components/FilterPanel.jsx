import React from 'react'
import { Menu, Grip } from 'lucide-react';

const FilterPannel = () => {

    const totalItems = 150; // Example total items, this can be dynamic based on your data
    return (
        <div className="w-full bg-white shadow-md rounded-xl p-4 flex flex-wrap items-center gap-7">
            {/* Total Items */}
            <div className="flex justify-between items-center gap-4">
                <span className="text-md font-medium text-gray-700">
                    <span className=" text-black">{totalItems}</span> Items
                </span>
            </div>

            {/* Sort By */}
            <div className="flex justify-between items-center gap-4">
                <label htmlFor="sort" className="text-md  font-medium text-gray-700">
                    Sort By
                </label>
                <select
                    id="sort"
                    className="mt-1 w-40 h-10 rounded-md  border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                    <option className='text-gray-400' >Name</option>
                    <option>Nike</option>
                    <option>Adidas</option>
                    <option>All Star</option>
                    <option>vans</option>
                </select>
            </div>
            {/* Show Items */}
            <div className='flex justify-between items-center gap-4'>
                <label htmlFor="category" className="block text-md font-medium text-gray-700">
                    Show
                </label>
                <select
                    id="category"
                    className="mt-1 block w-40 h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                    <option> 6</option>
                    <option> 7</option>
                    <option> 8</option>
                    <option> 9</option>
                    <option> 10</option>
                    <option> 11</option>
                    <option> 12</option>
                    <option> 13</option>
                    <option> 14</option>
                    <option> 15</option>
                </select>
            </div>

            {/* Apply Button */}

            <div className='flex items-center gap-4 ml-auto'>

                <div className="ml-auto">
                    <Grip className="w-8 h-8 p-2 rounded-lg cursor-pointer hover:bg-slate-400" />
                </div>
                <div className="ml-auto">
                    <Menu className="w-8 h-8 p-2 rounded-lg cursor-pointer hover:bg-slate-400" />
                </div>
            </div>
        </div>
    )
}

export default FilterPannel
