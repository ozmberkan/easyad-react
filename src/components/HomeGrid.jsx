import React, { useState } from 'react'
import AdCard from './AdCard'
import DefaultAdTitles from './DefaultAdTitles'
import data from '../data/data.js'
import { useAutoAnimate } from '@formkit/auto-animate/react'
export default function HomeGrid({ searchTerm }) {


    const [animationParent] = useAutoAnimate()

    const filteredData = data.filter(item => item.housing.status.toLowerCase().includes(searchTerm.toLowerCase()) || item.id.toString().includes(searchTerm.toLowerCase()))

    return (
        <div className='w-full h-full flex flex-col '>
            <DefaultAdTitles />
            <div className='w-full flex flex-col justify-start h-[700px] gap-y-2 overflow-auto ' ref={animationParent}>
                {filteredData.map((item) => (
                    <AdCard key={item.id} item={item} />
                ))}
                {
                    data.length === 0 && <div className='w-full h-full flex justify-center items-center text-lg text-gray-500'>No ads found</div>
                }
            </div>
        </div>
    )
}
