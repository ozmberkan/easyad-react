import React from 'react'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import GoogleMapReact from 'google-map-react';

export default function Sidebar() {
    const [animationParent] = useAutoAnimate()


    return (
        <div className='flex flex-col gap-y-5 bg-'>
            <div className='bg-[#F0F0F0]/75 w-full h-10 flex justify-center items-center rounded-md'>
                Filtreler
            </div>
            <div className='w-full bg-[#F0F0F0]/75 rounded-md flex flex-col h-[700px]' >
                <div className='flex flex-col gap-y-5 justify-center items-center relative px-5'  >
                    <span className='w-full flex justify-start items-center py-4 px-2'>Adres</span>
                    <select name="" id="" className='w-full py-2 bg-white rounded-md  px-4 flex justify-between items-center'>
                        <option value="">İl</option>
                        <option value="">İstanbul</option>
                        <option value="">İzmir</option>
                    </select>
                    <select name="" id="" className='w-full py-2 bg-white rounded-md  px-4 flex justify-between items-center'>
                        <option value="">İlçe</option>
                        <option value="">Kadıköy</option>
                        <option value="">Üsküdar</option>
                    </select>
                    <select name="" id="" className='w-full py-2 bg-white rounded-md  px-4 flex justify-between items-center'>
                        <option value="">Mahalle</option>
                        <option value="">Fikirtepe</option>
                        <option value="">Kozyatağı</option>
                    </select>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200065.48497184145!2d26.91490990628089!3d38.41782866398037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1713901759607!5m2!1str!2str" className='h-20 rounded-md'></iframe>
                    <span className='w-full flex justify-start items-center '>Fiyat</span>
                    <div className='flex gap-x-5 justify-center items-center w-full '>
                        <input type="text" placeholder='Min Fiyat..' className='px-4 py-1 rounded-md w-full text-sm outline-none' />
                        <span>-</span>
                        <input type="text" placeholder='Max Fiyat..' className='px-4 py-1 rounded-md w-full text-sm outline-none' />
                    </div>
                    <span className='w-full flex justify-start items-center '>Büyüklük</span>
                    <div className='flex gap-x-5 justify-center items-center w-full '>
                        <input type="text" placeholder='Min m2..' className='px-4 py-1 rounded-md w-full text-sm outline-none' />
                        <span>-</span>
                        <input type="text" placeholder='Max m2..' className='px-4 py-1 rounded-md w-full text-sm outline-none' />
                    </div>
                    <hr className='' />
                    <select name="" id="" className='w-full py-2 bg-white rounded-md  px-4 flex justify-between items-center'>
                        <option value="">Durum</option>
                        <option value="">Kiralık</option>
                        <option value="">Satılık</option>
                    </select>
                    <button className='w-full py-2 rounded-md font-medium text-white bg-[#EF0000] hover:bg-white hover:text-[#EF0000] hover:border-[#EF0000] border-2 transition-colors duration-200'><i>Ara</i></button>
                </div>
            </div>
        </div>
    )
}
