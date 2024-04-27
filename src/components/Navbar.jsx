import React from 'react'
import HizliEmlakLogo from '../assets/HizliEmlakLogo.svg'
import ReactFlagsSelect from "react-flags-select";
import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Menu } from '@headlessui/react'

import { WiStars } from "react-icons/wi";
import { Link } from 'react-router-dom';


export default function Navbar({ setSearchTerm, searchTerm }) {




    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const [animationParent] = useAutoAnimate()
    const [selected, setSelected] = useState("TR");
    const language = {
        US: "+1",
        TR: "+90",
    };
    return (
        <div className='flex justify-between items-center  w-full ' ref={animationParent}>
            <div className='flex items-center gap-x-3 '>
                <Link to="/"><img src={HizliEmlakLogo} alt="" className='cursor-pointer mr-1.5' /></Link>
                <ReactFlagsSelect
                    countries={Object.keys(language)}
                    onSelect={(code) => setSelected(code)}
                    selected={selected}
                    className="w-[100px]"
                    customLabels={{ "US": "EN", "TR": "TR" }}
                />

                <button className='max-w-[200px] px-4 h-[40px] rounded-md text-white bg-[#EF0000] hover:bg-transparent border-2 border-[#EF0000] duration-600 hover:text-[#EF0000] transition-colors'><i className='font-bold'>Hızlı </i>ilan ver</button>
                <div className='bg-gray-500/10 p-2.5 rounded-md w-[500px] px-4 text-gray-700/80 text-sm'>Anasayfa / Konut / Tüm Türkiye</div>
                <Link to="/updates" className='bg-[#EF0000] w-10 h-10 rounded-md text-white font-medium flex justify-center items-center'><WiStars size={40} /></Link>
            </div>
            <div className='flex items-center gap-5'>
                <div className='relative'>
                    <input type="text" value={searchTerm} onChange={handleSearch} placeholder='İlan no ile ara' className='focus:outline-none group  border-2 rounded-md p-2 pr-9 border-[#EF0000] transition-colors' />
                    <label className='cursor-pointer absolute right-3.5 top-3.5 text-[#EF0000] group-focus:text-yellow-300'><FaSearch /></label>
                </div>
                <div>
                    <Menu>
                        <Menu.Button className='flex items-center hover:bg-transparent border-2 border-[#EF0000] hover:text-[#EF0000] duration-600 transition-colors gap-1.5 bg-[#EF0000] p-2.5 text-white rounded-md'>Hesabım <FaAngleDown /> </Menu.Button>
                        <Menu.Items className='flex flex-col absolute mt-2 bg-zinc-200 z-10 p-2 rounded-md w-28 gap-y-2'>
                            <Menu.Item className="p-2 rounded-md">
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-gray-300 transition-colors cursor-pointer'}`}
                                    >
                                        İlanlarım
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item className="p-2 rounded-md">
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-gray-300 transition-colors cursor-pointer'}`}
                                    >
                                        Ayarlar
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
