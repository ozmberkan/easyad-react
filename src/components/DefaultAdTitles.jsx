import React from 'react'

export default function DefaultAdTitles({ sortData }) {
    return (
        <div className='flex justify-evenly h-10 mb-5 gap-x-2 '>
            <div className='flex justify-center items-center w-[15%] p-2 bg-gray-300/25 rounded-md text-sm'>Görsel</div>
            <div className='bg-blue-500 w-[35%] flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm'>İlan Başlığı</div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center'>Durum</div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center'>Büyüklük</div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center'>Oda Sayısı</div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center'>Şehir</div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center'>İlan Tarihi</div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center cursor-pointer' onClick={sortData}>Fiyat</div>
            <div className='flex justify-center items-center p-2 bg-gray-300/25 rounded-md text-sm w-[10%] text-center'>İşlemler</div>
        </div>
    )
}
