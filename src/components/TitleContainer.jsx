import React from 'react'

export default function TitleContainer() {
    return (
        <div className='w-full h-10 mt-4 gap-5 flex justify-start items-center '>
            <div className='flex justify-center items-center w-[10%] h-full bg-[#F0F0F0]/75 rounded-md text-sm'>Görsel</div>
            <div className='flex justify-center items-center gap-5 h-full'>
                <div className='bg-[#F0F0F0]/75 h-full w-[400px] flex justify-center items-center rounded-md text-sm'>İlan Başlığı</div>
                <div className='bg-[#F0F0F0]/75 h-full w-[100px] flex justify-center items-center rounded-md text-sm'>Durum</div>
                <div className='bg-[#F0F0F0]/75 h-full w-[100px] flex justify-center items-center rounded-md text-sm'>Büyüklük</div>
                <div className='bg-[#F0F0F0]/75 h-full w-[100px] flex justify-center items-center rounded-md text-sm'>Oda Sayısı</div>
                <div className='bg-[#F0F0F0]/75 h-full w-[100px] flex justify-center items-center rounded-md text-sm'>Şehir</div>
                <div className='bg-[#F0F0F0]/75 h-full w-[100px] flex justify-center items-center rounded-md text-sm'>İlan Tarihi</div>
                <div className='bg-[#F0F0F0]/75 h-full w-[100px] flex justify-center items-center rounded-md text-sm'>Fiyat</div>
            </div>
            <div className='flex justify-center items-center ml-auto  w-[200px] bg-[#F0F0F0]/75 h-full rounded-md text-sm'>İşlemler</div>
        </div>
    )
}
