import React from 'react'
import { IoMdHome } from "react-icons/io";

import { Link } from 'react-router-dom';
import HizliEmlakLogo from '../assets/HizliEmlakLogo.svg'
export default function Updates() {

    return (
        <div clas>
            <div className='flex items-center justify-end gap-x-5'>
                <img src={HizliEmlakLogo} alt="" />
                <Link to="/" className='bg-[#EF0000]/10 w-10 h-10 rounded-full flex justify-center items-center '><IoMdHome size={20} className='text-zinc-800' /></Link>
            </div>
            <div className='flex justify-start items-center gap-x-5'>
                <b>v1.0.1</b>
                <i>updates - 24.04.2024 </i>
            </div>
            <hr />
            <ul className='flex flex-col my-4'>
                <li className='list-disc'>Added Navbar</li>
                <li className='list-disc'>Added HomeGrid</li>
                <li className='list-disc'>Added Sidebar</li>
                <li className='list-disc'>Added Detail</li>
                <li className='list-disc'>Added Filter (search)</li>
            </ul>
            <div className='flex justify-start items-center gap-x-5'>
                <b>v1.0.2</b>
                <i>updates - 27.04.2024 </i>
            </div>
            <hr />
            <ul className='flex flex-col my-4'>
                <li className='list-disc'>Added Images</li>
                <li className='list-disc'>Added Slick</li>
                <li className='list-disc'>Half DetailPage</li>
                <li className='list-disc'>Added Updates Page / Button</li>
            </ul>
        </div>
    )
}
