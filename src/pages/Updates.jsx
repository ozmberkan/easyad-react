import React from 'react'
import { IoBackspace } from "react-icons/io5";
import { Link } from 'react-router-dom';
import HizliEmlakLogo from '../assets/HizliEmlakLogo.svg'
export default function Updates() {

    return (
        <div>
            <div className='flex justify-start items-center gap-x-5'>
                <img src={HizliEmlakLogo} alt="" />
                <b>v1.0.1</b>
                <i>updates - 24.04.2024 </i>
                <Link to="/"><IoBackspace size={28} /></Link>
            </div>
            <hr />
            <ul className='flex flex-col my-4'>
                <li className='list-disc'>Added Navbar</li>
                <li className='list-disc'>Added HomeGrid</li>
                <li className='list-disc'>Added Sidebar</li>
                <li className='list-disc'>Added Detail</li>
                <li className='list-disc'>Added Filter (search)</li>

            </ul>
        </div>
    )
}
