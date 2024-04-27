import React, { useState } from 'react'
import firstHome from '../assets/1.jpg'
import { Link } from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";


export default function AdCard({ item, searched }) {



    return (
        <div className=' flex justify-evenly gap-x-2'>
            <div className='flex justify-center items-center w-[15%] h-24 p-4 bg-gray-300/25 rounded-md text-sm'><img src={firstHome} className='rounded-md' alt="" /></div>
            <div className='bg-blue-500 w-[35%] flex justify-start items-center p-2 bg-gray-300/25 rounded-md text-sm h-24'>
                {item?.id}
            </div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center h-24'>
                {item?.housing.status}
            </div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center h-24'>
                {item?.housing.meter} m²
            </div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center h-24'>
                {item?.housing.floor}
            </div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center h-24'>
                {item?.country.city}
            </div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center h-24'>
                {item?.date}
            </div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center h-24'>
                <p className='font-semibold'> {item?.housing.price.toLocaleString('tr-TR') + '₺'}</p>
            </div>
            <div className='grid grid-cols-2 gap-1 p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center h-24'>

                <Link className='bg-[#D9D9D9]/50 rounded-md flex justify-center items-center hover:bg-gray-800/15 transition-colors'><IoCall size={20} className='text-gray-500/80' /></Link>
                <button className='bg-[#D9D9D9]/50 rounded-md flex justify-center items-center hover:bg-gray-800/15 transition-colors'><AiFillMessage size={20} className='text-gray-500/80' /></button>
                <button className='bg-[#D9D9D9]/50 rounded-md flex justify-center items-center hover:bg-gray-800/15 transition-colors'><FaBell size={20} className='text-gray-500/80' /></button>
                <Link to={`${item.id}`} className='bg-[#D9D9D9]/50 rounded-md flex justify-center items-center hover:bg-gray-800/15 transition-colors'><IoMdAddCircle size={20} className='text-gray-500/80' /></Link>

            </div>
        </div>
    )
}
